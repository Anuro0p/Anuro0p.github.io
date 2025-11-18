import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Mesh } from 'three';

/**
 * Placeholder 3D model component
 * A simple animated geometric shape that can be replaced with actual models
 */
export const ModelPlaceholder = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
      
      // Subtle floating animation
      meshRef.current.position.y = Math.sin(time) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      {/* Octahedron geometry */}
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#e5e5e5"
        emissive="#a3a3a3"
        emissiveIntensity={0.2}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
};

