import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Light rig component for 3D scenes
 * Creates ambient and directional lights with subtle animation
 */
export const LightRig = () => {
  const lightRef = useRef<THREE.DirectionalLight>(null);

  useFrame(({ clock }) => {
    if (lightRef.current) {
      // Subtle light movement
      const time = clock.getElapsedTime();
      lightRef.current.position.x = Math.sin(time * 0.5) * 2;
      lightRef.current.position.y = Math.cos(time * 0.3) * 2 + 5;
    }
  });

  return (
    <>
      {/* Bright ambient light for light background */}
      <ambientLight intensity={1.0} color="#ffffff" />
      
      {/* Soft directional lights */}
      <directionalLight
        ref={lightRef}
        position={[5, 5, 5]}
        intensity={0.5}
        color="#ffffff"
      />
      
      <directionalLight
        position={[-5, 3, -5]}
        intensity={0.3}
        color="#ffffff"
      />
    </>
  );
};

