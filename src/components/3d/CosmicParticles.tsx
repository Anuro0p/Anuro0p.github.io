import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Shader code inline
const particlesVertexShader = `
attribute vec3 aColor;
attribute float aSize;
varying vec3 vColor;

uniform float uTime;

void main() {
  vec3 pos = position;
  // drifting effect
  pos.x += sin(uTime * 0.3 + pos.y * 2.0) * 0.05;
  pos.y += cos(uTime * 0.25 + pos.x * 1.5) * 0.04;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = aSize;
  
  vColor = aColor;
}
`;

const particlesFragmentShader = `
varying vec3 vColor;
uniform float uTime;

void main() {
  float dist = length(gl_PointCoord - 0.5);
  float alpha = smoothstep(0.5, 0.0, dist);
  
  gl_FragColor = vec4(vColor, alpha * 0.9);
}
`;

export const CosmicParticles = () => {
  const points = useRef<THREE.Points>(null!);

  const { geometry, material } = useMemo(() => {
    const count = 2000;
    const posArray = new Float32Array(count * 3);
    const colorArray = new Float32Array(count * 3);
    const sizeArray = new Float32Array(count);

    // Color palette - white, purple, and lavender
    const colorPalette = [
      [1.0, 1.0, 1.0],   // White
      [0.7, 0.5, 1.0],   // Purple (#b388ff)
      [0.8, 0.6, 1.0],   // Lavender (#cc99ff)
      [0.9, 0.7, 1.0],   // Light blue (#d9b3ff)
      // [0.9, 0.3, 0.1], //red
      // [0.9, 0.2, 0.1], //red
      // [0.9, 0.1, 0.1], //red
      // [0.9, 0.0, 0.1], //red
      // [0.9, 0.4, 0.1], //orange
      // [0.9, 0.5, 0.1], //orange
      // [0.9, 0.6, 0.1], //orange
      // [0.9, 0.7, 0.1], //orange
      // [0.9, 0.8, 0.1], //orange
      // [0.9, 0.9, 0.1], //orange
      // [0.9, 1.0, 0.1], //orange
      // //yellow [0.9, 0.9, 0.0]
      // [0.9, 0.9, 0.0], //yellow
      // [0.9, 0.8, 0.0], //yellow
      // [0.9, 0.7, 0.0], //yellow
      // [0.9, 0.6, 0.0], //yellow
      // [0.9, 0.5, 0.0], //yellow
      // [0.9, 0.4, 0.0], //yellow
      // [0.9, 0.3, 0.0], //yellow
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Random positions
      posArray[i3 + 0] = (Math.random() - 0.5) * 15;
      posArray[i3 + 1] = (Math.random() - 0.5) * 15;
      posArray[i3 + 2] = (Math.random() - 0.5) * 15;
      
      // Random color from palette with slight variation
      const colorIndex = Math.floor(Math.random() * colorPalette.length);
      const baseColor = colorPalette[colorIndex];
      const variation = 0.15; // Slight color variation
      colorArray[i3 + 0] = baseColor[0] + (Math.random() - 0.5) * variation;
      colorArray[i3 + 1] = baseColor[1] + (Math.random() - 0.5) * variation;
      colorArray[i3 + 2] = baseColor[2] + (Math.random() - 0.5) * variation;
      
      // Random size with much more variation (from 1.5 to 20)
      sizeArray[i] = 1.5 + Math.random() * 12.5;
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    geom.setAttribute('aColor', new THREE.BufferAttribute(colorArray, 3));
    geom.setAttribute('aSize', new THREE.BufferAttribute(sizeArray, 1));

    const mat = new THREE.ShaderMaterial({
      vertexShader: particlesVertexShader,
      fragmentShader: particlesFragmentShader,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
      },
    });

    return { geometry: geom, material: mat };
  }, []);

  useFrame(({ clock }) => {
    if (points.current) {
      points.current.rotation.y = clock.getElapsedTime() * 0.05;
      
      // Update time uniform
      const mat = points.current.material as THREE.ShaderMaterial;
      if (mat.uniforms) {
        mat.uniforms.uTime.value = clock.getElapsedTime();
      }
    }
  });

  return (
    <points ref={points} geometry={geometry} material={material} />
  );
};

