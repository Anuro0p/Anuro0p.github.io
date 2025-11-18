import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Hook to create mouse-based parallax effect for 3D camera
 * Returns normalized mouse coordinates (-1 to 1)
 */
export const useMouseParallax = (intensity: number = 0.5) => {
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to -1 to 1
      targetRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Smooth interpolation
    const animate = () => {
      mouseRef.current.x += (targetRef.current.x * intensity - mouseRef.current.x) * 0.1;
      mouseRef.current.y += (targetRef.current.y * intensity - mouseRef.current.y) * 0.1;
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [intensity]);

  return mouseRef.current;
};

/**
 * Hook to get mouse position for camera movement
 */
export const useMousePosition = () => {
  const positionRef = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      positionRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return positionRef.current;
};

