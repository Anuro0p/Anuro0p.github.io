import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Text3D, useGLTF, useProgress } from '@react-three/drei';
import { CosmicParticles } from './CosmicParticles';
import { useLoading } from '../../contexts/LoadingContext';
import * as THREE from 'three';
import modelPath from "./models/tunnel_test.glb?url";
import modelPath2 from "./models/model2.glb?url";


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
 * 3D Tunnel Model - positioned around the camera with scroll-based Z position
 */
const Model3D = ({ currentModel }: { currentModel: 'model1' | 'model2' }) => {
  const { scene: scene1 } = useGLTF(modelPath);
  const { scene: scene2 } = useGLTF(modelPath2);
  const tunnelRef = useRef<THREE.Group>(null!);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Clone the scene to avoid issues with multiple instances
  const currentScene = currentModel === 'model1' ? scene1 : scene2;
  const clonedScene = currentScene.clone();

  // Constants for Z position interpolation
  const startZ1 = 20;
  const startZ = 9;
  const endZ1 = 2;
  const endZ = 0;

  // Track scroll position and calculate progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll progress (0 to 1)
      // Adjust these values to control when the animation starts/ends
      const maxScroll = Math.max(documentHeight - windowHeight, 1); // Prevent division by zero
      const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      
      setScrollProgress(progress);
    };

    if (typeof window !== 'undefined') {
      // Call immediately to set initial position
      handleScroll();
      window.addEventListener('scroll', handleScroll);
      // Also listen for resize to recalculate on window size changes
      window.addEventListener('resize', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      };
    }
  }, []);

  // Update tunnel position based on scroll
  useFrame(() => {
    if (tunnelRef.current) {
      // Interpolate Z position from startZ to endZ based on scroll progress
      const currentZ = startZ - (startZ - endZ) * scrollProgress;
      const currentZ1 = startZ1 - (startZ1 - endZ1) * scrollProgress;
      
      // Different positions for each model
      if (currentModel === 'model1') {
        tunnelRef.current.position.x = 0.6;
        tunnelRef.current.position.y = -1;
        tunnelRef.current.position.z = currentZ;
      } else {
        // Slightly different position for model2
        tunnelRef.current.position.x = 2;
        tunnelRef.current.position.y = -2;
        tunnelRef.current.position.z = currentZ1;
      }
    }
  });

  // Calculate bounding box to understand model size
  useEffect(() => {
    if (tunnelRef.current) {
      const box = new THREE.Box3().setFromObject(tunnelRef.current);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      console.log('Tunnel model size:', size);
      console.log('Tunnel model center:', center);
    }
  }, []);

  // Position tunnel at origin so camera is inside it
  // Rotated 90 degrees on Y axis for model1, slightly different for model2
  // Initial position matches startZ (9) when scrollProgress is 0
  const initialZ = startZ - (startZ - endZ) * scrollProgress;
  const initialZ1 = startZ1 - (startZ1 - endZ1) * scrollProgress;
  
  // Different rotation for each model
  const rotationY = currentModel === 'model1' 
    ? 270 * Math.PI / 180 
    : (175) * Math.PI / 180; // 5 degrees different for model27
  
  return (
    <group 
      ref={tunnelRef} 
      position={[currentModel === 'model1' ? 0.6 : 0.5, currentModel === 'model1' ? -1 : -0.1, currentModel === 'model1' ? initialZ : initialZ1]} 
      rotation={[0, rotationY, 0]} 
      scale={[currentModel === 'model1' ? 1 : 0.1, currentModel === 'model1' ? 1 : 0.1, currentModel === 'model1' ? 1 : 0.1]}
    >
      <primitive object={clonedScene} />
    </group>
  );
};

// Preload the models
useGLTF.preload(modelPath);
useGLTF.preload(modelPath2);

/**
 * Camera rig with mouse parallax - camera stays inside tunnel, slight movement
 */
const CameraRig = ({ children }: { children: React.ReactNode }) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useFrame(({ camera }) => {
    // Slight camera movement inside the tunnel based on mouse
    // Keep camera looking forward down the tunnel
    camera.position.x += (mouse.x * 0.3 - camera.position.x) * 0.1;
    camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.1;
    // Camera looks forward down the tunnel (positive Z direction)
    camera.lookAt(camera.position.x, camera.position.y, camera.position.z + 1);
  });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
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
 * Tracks loading progress and communicates it to parent via context
 */
const LoadingTracker = () => {
  const { progress, active } = useProgress();
  const { setLoading } = useLoading();
  
  useEffect(() => {
    setLoading(active, progress);
  }, [progress, active, setLoading]);

  return null;
};

/**
 * Glitch Effect Component - Single subtle flash during transition
 */
const GlitchEffect = ({ active, duration = 700 }: { active: boolean; duration?: number }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (!active) {
      setOpacity(0);
      return;
    }

    // Single flash: fade in quickly, then fade out
    const fadeInDuration = duration * 0.3; // 30% of duration to fade in
    const fadeOutDuration = duration * 0.7; // 70% of duration to fade out
    
    const startTime = Date.now();
    let animationFrame: number;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      
      if (elapsed < fadeInDuration) {
        // Fade in
        const progress = elapsed / fadeInDuration;
        setOpacity(progress * 0.3); // Max opacity 0.3 (not too bright)
      } else if (elapsed < duration) {
        // Fade out
        const progress = (elapsed - fadeInDuration) / fadeOutDuration;
        setOpacity(0.3 * (1 - progress));
      } else {
        setOpacity(0);
        return;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [active, duration]);

  if (!active || opacity === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        background: `rgba(255, 255, 255, ${opacity})`,
        mixBlendMode: 'screen',
      }}
    />
  );
};

/**
 * Main scene component
 */
const Scene = ({ 
  currentModel
}: { 
  currentModel: 'model1' | 'model2';
}) => {

  return (
    <>
      <LoadingTracker />
      <CameraRig>
        {/* Background Stars */}
        <Stars radius={300} depth={60} count={3500} factor={4} fade speed={1} />

        {/* Custom Cosmic Particle Shader */}
        <CosmicParticles />

        {/* Base Lights */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.9}
          color="#5b4bff"
        />
        <pointLight position={[-3, -2, -3]} intensity={0.7} color="#6f2cff" />

        {/* Additional Lights for Model2 - Magenta and White */}
        {currentModel === "model2" && (
          <>
            {/* Magenta Lights */}
            <pointLight position={[3, 3, 5]} intensity={1.2} color="#ff00ff" />
            <pointLight position={[-3, 3, 5]} intensity={1.2} color="#ff00ff" />
            <pointLight position={[0, 5, 3]} intensity={1.0} color="#ff00ff" />
            <directionalLight
              position={[0, 5, 5]}
              intensity={0.2}
              color="#5b4bff"
            />
            <directionalLight
              position={[0, 5, 5]}
              intensity={0.8}
              color="#5b4bff"
            />

            {/* White Lights */}
            {/* <pointLight position={[5, 0, 5]} intensity={1.0} color="#ffffff" /> */}
            {/* <pointLight position={[-5, 0, 5]} intensity={1.0} color="#ffffff" /> */}
            {/* <pointLight position={[0, -3, 5]} intensity={0.9} color="#ffffff" /> */}
            <directionalLight
              position={[-5, -5, 5]}
              intensity={0.5}
              color="#ffffff"
            />
            <directionalLight
              position={[5, -5, 5]}
              intensity={0.6}
              color="#ffffff"
            />

            {/* Red Lights */}
            {/* <pointLight position={[4, 1, 6]} intensity={1.1} color="#ff0000" /> */}
            {/* <pointLight position={[-4, 1, 6]} intensity={1.1} color="#ff0000" /> */}
            {/* <pointLight position={[2, -2, 7]} intensity={1.0} color="#ff0000" /> */}
            {/* <pointLight position={[-2, -2, 7]} intensity={1.0} color="#ff0000" /> */}
            {/* <pointLight position={[0, 2, 4]} intensity={1.2} color="#ff0000" /> */}
            {/* <pointLight position={[6, 2, 5]} intensity={0.9} color="#ff0000" /> */}
            <pointLight position={[-6, 2, 5]} intensity={0.9} color="#ff0000" />
            <directionalLight
              position={[0, -8, 5]}
              intensity={0.7}
              color="#ff0000"
            />
            <directionalLight
              position={[7, 3, 5]}
              intensity={0.6}
              color="#ff0000"
            />
            <directionalLight
              position={[-7, 3, 5]}
              intensity={0.6}
              color="#ff0000"
            />

            {/* Additional ambient for model2 */}
            <ambientLight color="blue" intensity={2} />
          </>
        )}

        {/* Floating Name - positioned ahead in the tunnel */}
        <group position={[0, 0, 3]}>
          <FloatingName />
        </group>
      </CameraRig>

      {/* 3D Tunnel Model - camera is inside */}
      <Model3D currentModel={currentModel} />
    </>
  );
};

export const HeroCanvas = () => {
  const [currentModel, setCurrentModel] = useState<'model1' | 'model2'>('model1');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Switch to model2 after 5 seconds with glitch transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true);
      // Start transition, switch model after a short delay
      setTimeout(() => {
        setCurrentModel('model2');
        // End transition after glitch effect (300ms flash)
        setTimeout(() => {
          setIsTransitioning(false);
        }, 300);
      }, 50);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="-z-10 fixed inset-0 bg-black w-screen h-screen overflow-hidden">
      <Canvas 
        camera={{ position: [0, 0, 0], fov: 75 }}
        gl={{ alpha: false }}
      >
        <Suspense fallback={null}>
          <Scene 
            currentModel={currentModel}
          />
        </Suspense>
      </Canvas>
      <GlitchEffect active={isTransitioning} duration={300} />
    </div>
  );
};

