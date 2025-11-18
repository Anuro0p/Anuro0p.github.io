import { Suspense, useRef, useState, useEffect, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Text3D, useGLTF, useProgress } from '@react-three/drei';
import { CosmicParticles } from './CosmicParticles';
import { Loader } from '../ui/Loader';
import * as THREE from 'three';
import modelPath from './models/model1.glb?url';

/**
 * Floating 3D name component
 */
const FloatingName = () => {
  const ref = useRef<THREE.Mesh>(null!);
  const [fontLoaded, setFontLoaded] = useState(false);

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      ref.current.position.y = Math.sin(t * 5) * 4;
      ref.current.rotation.y = Math.sin(t * 3) * 4;
    }
  });

  useEffect(() => {
    // Try to load font, fallback if it fails
    fetch('/fonts/helvetiker_regular.typeface.json')
      .then(async (res) => {
        // Check if response is actually JSON, not HTML (404 page)
        const contentType = res.headers.get('content-type');
        if (!res.ok || !contentType || !contentType.includes('application/json')) {
          throw new Error('Font not available');
        }
        // Try to parse as JSON to ensure it's valid
        const text = await res.text();
        try {
          JSON.parse(text);
          setFontLoaded(true);
        } catch {
          throw new Error('Invalid JSON');
        }
      })
      .catch(() => {
        // Font file doesn't exist, will use fallback
        setFontLoaded(false);
      });
  }, []);

  // Fallback: Use a simple mesh if font isn't loaded
  if (!fontLoaded) {
    return (
      <mesh ref={ref} position={[0, 0, 0]}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshStandardMaterial color="#7c5cff" visible={false} />
      </mesh>
    );
  }

  return (
    <Text3D
      ref={ref}
      font="/fonts/helvetiker_regular.typeface.json"
      size={1.1}
      height={0.2}
      bevelEnabled
      bevelSize={0.03}
      bevelThickness={0.03}
    >
      Anuroop Vijayan
      {/* <meshStandardMaterial color="#7c5cff" metalness={0.6} roughness={0.2} /> */}
    </Text3D>
  );
};

/**
 * 3D Model component with slight cursor-based tilt (no auto-rotation)
 */
const Model3D = () => {
  const { scene } = useGLTF(modelPath);
  const lookAtGroupRef = useRef<THREE.Group>(null!);
  const tiltGroupRef = useRef<THREE.Group>(null!);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useFrame(({ camera }) => {
    if (lookAtGroupRef.current) {
      // Make the outer group always face the camera
      lookAtGroupRef.current.lookAt(camera.position);
    }
    
    if (tiltGroupRef.current) {
      // Apply slight tilt based on mouse position
      const tiltX = mouse.y * 0.1; // Subtle tilt forward/backward
      const tiltY = mouse.x * 0.1; // Subtle tilt left/right
      
      tiltGroupRef.current.rotation.x = tiltX;
      tiltGroupRef.current.rotation.y = tiltY;
    }
  });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to -1 to 1
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMove);
      return () => window.removeEventListener('mousemove', handleMove);
    }
  }, []);

  // Clone the scene to avoid issues with multiple instances
  const clonedScene = scene.clone();

  return (
    <group ref={lookAtGroupRef} position={[0, -0.8, -2]} scale={[6, 6, 5.5]}>
      <group ref={tiltGroupRef}>
        <primitive object={clonedScene} />
      </group>
    </group>
  );
};

// Preload the model
useGLTF.preload(modelPath);

/**
 * Camera rig with mouse parallax
 */
const CameraRig = ({ children }: { children: React.ReactNode }) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useFrame(({ camera }) => {
    camera.position.x += (mouse.x * 2 - camera.position.x) * 0.1;
    camera.position.y += (mouse.y * 2 - camera.position.y) * 0.1;
    camera.lookAt(0, 0, 0);
  });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 5,
        y: -(e.clientY / window.innerHeight - 0.5) * 5,
      });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMove);
      return () => window.removeEventListener('mousemove', handleMove);
    }
  }, []);

  return <>{children}</>;
};

/**
 * Loading progress tracker component
 * Tracks loading progress and communicates it to parent
 */
const LoadingTracker = ({ onProgress }: { onProgress: (progress: number, active: boolean) => void }) => {
  const { progress, active } = useProgress();
  
  useEffect(() => {
    onProgress(progress, active);
  }, [progress, active, onProgress]);

  return null;
};

/**
 * Main scene component
 */
const Scene = ({ onLoadingProgress }: { onLoadingProgress: (progress: number, active: boolean) => void }) => {
  return (
    <>
      <LoadingTracker onProgress={onLoadingProgress} />
      <CameraRig>
        {/* Background Stars */}
        <Stars radius={300} depth={60} count={3500} factor={4} fade speed={1} />

        {/* Custom Cosmic Particle Shader */}
        <CosmicParticles />

        {/* Lights */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.9} color="#5b4bff" />
        <pointLight position={[-3, -2, -3]} intensity={0.7} color="#6f2cff" />

        {/* Floating Name */}
        <group position={[0, 0.5, 0]}>
          <FloatingName />
        </group>
      </CameraRig>

      {/* 3D Model outside CameraRig - only responds to its own cursor tilt, not camera parallax */}
      <Model3D />
    </>
  );
};

export const HeroCanvas = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingProgress = useCallback((progress: number, active: boolean) => {
    setLoadingProgress(progress);
    setIsLoading(active);
  }, []);

  return (
    <div className="-z-10 fixed inset-0 bg-black w-screen h-screen overflow-hidden">
      <Loader progress={loadingProgress} active={isLoading} />
      <Canvas 
        camera={{ position: [0, 0, 7], fov: 55 }}
        gl={{ alpha: false }}
      >
        <Suspense fallback={null}>
          <Scene onLoadingProgress={handleLoadingProgress} />
        </Suspense>
      </Canvas>
    </div>
  );
};

