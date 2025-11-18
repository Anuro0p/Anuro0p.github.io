import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Mesh } from 'three';

// Shader for glowing blob effect
const blobVertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vUv = uv;
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const blobFragmentShader = `
uniform float time;
uniform vec3 color;
uniform vec2 center;
uniform float radius;
uniform float intensity;

varying vec2 vUv;
varying vec3 vPosition;

// Simple noise function for organic variation
float noise(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec2 uv = vUv;
  
  // Distance from center of blob
  vec2 toCenter = uv - center;
  float dist = length(toCenter);
  
  // Base blob shape
  float blob = 1.0 - smoothstep(0.0, radius * 0.8, dist);
  
  // Add organic variation using multiple sine waves
  float variation1 = sin(dist * 8.0 + time * 0.3) * 0.15;
  float variation2 = cos(dist * 12.0 - time * 0.4) * 0.1;
  float variation3 = sin(dist * 6.0 + time * 0.2) * 0.08;
  blob += variation1 + variation2 + variation3;
  
  // Soft, ethereal glow effect - extends beyond the blob
  float glow = 1.0 - smoothstep(0.0, radius * 2.5, dist);
  glow = pow(glow, 2.0); // Very soft falloff for ethereal look
  blob = max(blob, glow * 0.8); // Strong, soft glow
  
  // Apply intensity with pulsing
  float pulse = sin(time * 0.5) * 0.1 + 0.9;
  float alpha = blob * intensity * pulse;
  
  // Bright color with enhanced glow
  vec3 finalColor = color * (1.0 + glow * 1.2);
  
  gl_FragColor = vec4(finalColor, alpha);
}
`;

interface BlobData {
  position: [number, number, number];
  color: [number, number, number];
  radius: number;
  speed: number;
}

/**
 * Large glowing organic blob component
 */
const GlowingBlob = ({ position, color, radius, speed }: BlobData) => {
  const meshRef = useRef<Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const centerRef = useRef({ x: 0.5 + (Math.random() - 0.5) * 0.3, y: 0.5 + (Math.random() - 0.5) * 0.3 });

  useFrame(({ clock, camera }) => {
    if (meshRef.current && materialRef.current) {
      const time = clock.getElapsedTime();
      
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(time * speed + position[0]) * 0.4;
      meshRef.current.position.x = position[0] + Math.cos(time * speed * 0.7) * 0.3;
      
      // Make plane always face camera (billboard effect)
      meshRef.current.lookAt(camera.position);
      
      // Update shader uniforms
      if (materialRef.current.uniforms) {
        materialRef.current.uniforms.time.value = time;
        // Animate center slightly for organic movement
        centerRef.current.x = 0.5 + Math.sin(time * 0.3 + position[0]) * 0.15;
        centerRef.current.y = 0.5 + Math.cos(time * 0.2 + position[1]) * 0.15;
        materialRef.current.uniforms.center.value.set(
          centerRef.current.x,
          centerRef.current.y
        );
      }
    }
  });

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: blobVertexShader,
      fragmentShader: blobFragmentShader,
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Vector3(...color) },
        center: { value: new THREE.Vector2(0.5, 0.5) },
        radius: { value: 0.6 }, // Normalized radius (0-1 in UV space)
        intensity: { value: 0.9 },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
  }, [color]);

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[radius * 2, radius * 2, 64, 64]} />
      <primitive object={material} ref={materialRef} attach="material" />
    </mesh>
  );
};

/**
 * Glowing blob system - creates large organic glowing shapes
 */
export const GlowingBlobs = () => {
  // Create multiple bright white glowing blobs
  // Positioned to create the ethereal, light pattern from the image
  const blobs = useMemo<BlobData[]>(() => {
    const blobArray: BlobData[] = [];
    
    // Large bright white blobs (dominant - all white for ethereal look)
    blobArray.push(
      { position: [-1.5, -0.8, -3], color: [1, 1, 1], radius: 5, speed: 0.15 },
      { position: [0.8, -1.2, -3.5], color: [1, 1, 1], radius: 4.5, speed: 0.2 },
      { position: [-0.5, -1.5, -4], color: [1, 1, 1], radius: 4, speed: 0.18 },
      { position: [1.2, -0.5, -3.2], color: [1, 1, 1], radius: 3.8, speed: 0.22 },
      { position: [-2, -1.8, -4.2], color: [1, 1, 1], radius: 3.5, speed: 0.25 }
    );
    
    // Medium white blobs
    blobArray.push(
      { position: [0, -1, -4.5], color: [1, 1, 1], radius: 3, speed: 0.3 },
      { position: [-1.8, -0.3, -3.8], color: [1, 1, 1], radius: 2.8, speed: 0.28 },
      { position: [1.5, -1.5, -4.8], color: [1, 1, 1], radius: 2.5, speed: 0.32 },
      { position: [-0.3, -2, -4.2], color: [1, 1, 1], radius: 2.2, speed: 0.35 }
    );
    
    // Smaller white blobs for detail
    blobArray.push(
      { position: [0.5, -0.8, -5], color: [1, 1, 1], radius: 1.8, speed: 0.4 },
      { position: [-1.2, -1.3, -5.2], color: [1, 1, 1], radius: 1.5, speed: 0.45 },
      { position: [1.8, -1, -4.5], color: [1, 1, 1], radius: 1.6, speed: 0.38 }
    );
    
    return blobArray;
  }, []);

  return (
    <>
      {blobs.map((blob, index) => (
        <GlowingBlob key={index} {...blob} />
      ))}
    </>
  );
};

