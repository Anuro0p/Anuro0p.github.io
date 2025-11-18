import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Mesh } from 'three';

// Shader for soft blue-green gradient
const gradientVertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const gradientFragmentShader = `
varying vec2 vUv;

void main() {
  // Create soft gradient from light green (bottom-left) to light blue (diagonal up-right)
  // Gradient is in bottom-left quadrant, fading to white
  
  // Map UV to screen space (0,0 is bottom-left)
  vec2 pos = vUv;
  
  // Create diagonal gradient in bottom-left area
  float gradientMask = 1.0 - smoothstep(0.0, 0.6, length(pos - vec2(0.0, 0.0)));
  
  // Light pastel green (bottom-left)
  vec3 green = vec3(0.7, 0.95, 0.85);
  
  // Light blue (diagonal up-right)
  vec3 blue = vec3(0.75, 0.9, 1.0);
  
  // Mix green and blue based on diagonal position
  float mixFactor = (pos.x + pos.y) * 0.7;
  vec3 gradientColor = mix(green, blue, mixFactor);
  
  // Fade to white in upper-right areas
  float whiteFade = smoothstep(0.3, 1.0, length(pos - vec2(0.5, 0.5)));
  vec3 finalColor = mix(gradientColor, vec3(1.0), whiteFade);
  
  // Apply gradient mask
  finalColor = mix(vec3(1.0), finalColor, gradientMask);
  
  gl_FragColor = vec4(finalColor, 1.0);
}
`;

/**
 * Soft gradient background component
 * Creates the light blue-green gradient in bottom-left
 */
export const GradientBackground = () => {
  const meshRef = useRef<Mesh>(null);

  const material = useRef(
    new THREE.ShaderMaterial({
      vertexShader: gradientVertexShader,
      fragmentShader: gradientFragmentShader,
      side: THREE.DoubleSide,
    })
  );

  return (
    <mesh ref={meshRef} position={[0, 0, -10]}>
      <planeGeometry args={[20, 20]} />
      <primitive object={material.current} attach="material" />
    </mesh>
  );
};

