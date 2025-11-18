import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { Mesh } from 'three';

/**
 * 3D floating text component
 * Displays "Anuroop Vijayan" with animation and glow effect
 * Uses Text component from drei which doesn't require external fonts
 */
export const FloatingText = () => {
  const textRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (textRef.current) {
      const time = clock.getElapsedTime();
      
      // Subtle floating animation
      textRef.current.position.y = Math.sin(time * 0.5) * 0.1;
      
      // Gentle rotation
      textRef.current.rotation.y = Math.sin(time * 0.3) * 0.1;
    }
  });

  return (
    <group position={[0, 0, -2]}>
      <Text
        ref={textRef}
        fontSize={0.5}
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
      >
        Anuroop Vijayan
        <meshStandardMaterial
          color="#60a5fa"
          emissive="#3b82f6"
          emissiveIntensity={0.8}
          metalness={0.9}
          roughness={0.1}
        />
      </Text>
    </group>
  );
};

