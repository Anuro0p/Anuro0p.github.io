import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { BufferGeometry, Float32BufferAttribute, Points } from 'three';
// Import shaders as raw strings
const particlesVertexShader = `
attribute float size;
attribute vec3 color;
attribute float alpha;
attribute float speed;

varying vec3 vColor;
varying float vAlpha;
varying float vDistance;

void main() {
  vColor = color;
  vAlpha = alpha;
  
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  
  // Calculate distance from camera
  vDistance = -mvPosition.z;
  
  // Size increases as particle gets closer (perspective effect)
  // Better size calculation for visibility
  gl_PointSize = size * (400.0 / max(vDistance, 0.5));
  
  gl_Position = projectionMatrix * mvPosition;
}
`;

const particlesFragmentShader = `
uniform float time;
uniform vec2 resolution;

varying vec3 vColor;
varying float vAlpha;
varying float vDistance;

void main() {
  vec2 center = gl_PointCoord - vec2(0.5);
  float dist = length(center);
  
  // Bokeh effect - soft, glowing circular particles
  float alpha = vAlpha * (1.0 - smoothstep(0.0, 0.5, dist));
  
  // Add glow effect - particles get brighter toward center
  float glow = 1.0 - smoothstep(0.0, 0.3, dist);
  alpha += glow * 0.5;
  
  // Fade out as particles get further away (blur effect)
  // Particles closer to camera (smaller vDistance) are brighter
  // Particles further away (larger vDistance) fade out
  float distanceFade = 1.0 - smoothstep(5.0, 80.0, vDistance);
  alpha *= distanceFade;
  
  // Blur effect - particles get more blurred as they get further
  float blurAmount = smoothstep(5.0, 80.0, vDistance);
  float blur = 1.0 - smoothstep(0.0, 0.5 + blurAmount * 0.3, dist);
  alpha *= blur;
  
  // Subtle twinkling
  float twinkle = sin(time * 1.5 + vDistance * 0.5) * 0.1 + 0.9;
  alpha *= twinkle;
  
  // Enhanced color with glow
  vec3 finalColor = vColor * (1.0 + glow * 0.3);
  
  gl_FragColor = vec4(finalColor, alpha);
}
`;

/**
 * GPU-accelerated particle system using custom shaders
 * Particle emitter: generates particles near camera, they move away and fade out
 */
export const Particles = ({ count = 3000 }: { count?: number }) => {
  const pointsRef = useRef<Points>(null);
  const shaderMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const positionsRef = useRef<Float32Array | null>(null);
  const speedsRef = useRef<Float32Array | null>(null);
  const lifetimesRef = useRef<Float32Array | null>(null);
  const agesRef = useRef<Float32Array | null>(null);

  // Generate initial particles - they will spawn near camera and move away
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const colors = new Float32Array(count * 3);
    const alphas = new Float32Array(count);
    const speeds = new Float32Array(count);
    const lifetimes = new Float32Array(count);
    const ages = new Float32Array(count);

    // Initialize all particles as "dead" (will be spawned in animation)
    for (let i = 0; i < count; i++) {
      // Start particles far away (dead state)
      positions[i * 3] = 0;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = -1000; // Far away, invisible

      // Smaller sizes for bokeh dots (like in the image)
      sizes[i] = Math.random() * 1.5 + 0.3; // 0.3 to 1.8 (smaller dots)

      // Small white bokeh particles (like in the image)
      const brightness = Math.random() * 0.3 + 0.7; // 0.7 to 1.0 (bright white)
      colors[i * 3] = brightness; // R
      colors[i * 3 + 1] = brightness; // G
      colors[i * 3 + 2] = brightness; // B (pure white)

      // Alpha will be controlled by distance/age
      alphas[i] = 1.0;

      // Random speed for each particle
      speeds[i] = Math.random() * 0.5 + 0.2; // 0.2 to 0.7

      // Random lifetime (how long particle lives)
      lifetimes[i] = Math.random() * 3.0 + 2.0; // 2 to 5 seconds

      // Age starts at lifetime (dead)
      ages[i] = lifetimes[i];
    }

    positionsRef.current = positions;
    speedsRef.current = speeds;
    lifetimesRef.current = lifetimes;
    agesRef.current = ages;

    return { positions, sizes, colors, alphas, speeds, lifetimes, ages };
  }, [count]);

  // Create geometry
  const geometry = useMemo(() => {
    const geom = new BufferGeometry();
    geom.setAttribute('position', new Float32BufferAttribute(particles.positions, 3));
    geom.setAttribute('size', new Float32BufferAttribute(particles.sizes, 1));
    geom.setAttribute('color', new Float32BufferAttribute(particles.colors, 3));
    geom.setAttribute('alpha', new Float32BufferAttribute(particles.alphas, 1));
    geom.setAttribute('speed', new Float32BufferAttribute(particles.speeds, 1));
    return geom;
  }, [particles]);

  // Shader material
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: particlesVertexShader,
      fragmentShader: particlesFragmentShader,
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending, // Additive blending for glow effect
    });
  }, []);

  // Animate particles - spawn near camera, move away, fade and remove
  useFrame(({ clock }) => {
    if (pointsRef.current && shaderMaterialRef.current && positionsRef.current && speedsRef.current && lifetimesRef.current && agesRef.current && pointsRef.current.geometry) {
      const time = clock.getElapsedTime();
      const delta = clock.getDelta();
      
      // Update shader time uniform
      if (shaderMaterialRef.current.uniforms) {
        shaderMaterialRef.current.uniforms.time.value = time;
      }

      const positions = positionsRef.current;
      const speeds = speedsRef.current;
      const lifetimes = lifetimesRef.current;
      const ages = agesRef.current;

      for (let i = 0; i < count; i++) {
        // Age the particle
        ages[i] += delta;

        // If particle is dead (age >= lifetime), spawn a new one
        if (ages[i] >= lifetimes[i]) {
          // Spawn new particle near camera
          const spawnSpread = 8; // Spawn area around camera
          positions[i * 3] = (Math.random() - 0.5) * spawnSpread; // X
          positions[i * 3 + 1] = (Math.random() - 0.5) * spawnSpread; // Y
          positions[i * 3 + 2] = -2; // Z (slightly ahead of camera, negative Z)

          // Reset age
          ages[i] = 0;

          // Randomize speed
          speeds[i] = Math.random() * 0.5 + 0.2;
        } else {
          // Particle is alive - move it away from camera (decrease Z, going further negative)
          positions[i * 3 + 2] -= speeds[i] * delta * 15; // Move away from camera

          // Subtle random drift for organic movement
          positions[i * 3] += (Math.random() - 0.5) * 0.1 * delta;
          positions[i * 3 + 1] += (Math.random() - 0.5) * 0.1 * delta;
        }

        // Remove particles that are too far away
        if (positions[i * 3 + 2] < -100) {
          // Mark as dead
          ages[i] = lifetimes[i];
          positions[i * 3 + 2] = -1000; // Move far away
        }
      }

      // Update geometry positions
      const positionAttribute = pointsRef.current.geometry.attributes.position;
      if (positionAttribute) {
        // Copy the updated positions into the attribute array
        positionAttribute.array.set(positions);
        positionAttribute.needsUpdate = true;
      }
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <primitive object={material} ref={shaderMaterialRef} attach="material" />
    </points>
  );
};

