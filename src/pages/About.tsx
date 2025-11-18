import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/ui/SectionTitle';
import * as THREE from 'three';
import { Mesh } from 'three';

/**
 * Wobbling sphere component for About page
 */
const WobblingSphere = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      
      // Wobble effect using sine waves
      const wobbleX = Math.sin(time * 2) * 0.1;
      const wobbleY = Math.cos(time * 1.5) * 0.1;
      const wobbleZ = Math.sin(time * 1.8) * 0.1;
      
      meshRef.current.position.set(wobbleX, wobbleY, wobbleZ);
      meshRef.current.rotation.x = time * 0.5;
      meshRef.current.rotation.y = time * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#e5e5e5"
        emissive="#a3a3a3"
        emissiveIntensity={0.2}
        metalness={0.9}
        roughness={0.1}
        wireframe
      />
    </mesh>
  );
};

/**
 * About page component
 * Bio, timeline, and 3D sphere animation
 */
export const About = () => {
  const timelineItems = [
    {
      year: '2024',
      title: 'Creative Developer',
      description: 'Building immersive WebGL experiences and interactive portfolios',
    },
    {
      year: '2023',
      title: 'Frontend Engineer',
      description: 'Specialized in React, Three.js, and modern web technologies',
    },
    {
      year: '2022',
      title: 'Web Developer',
      description: 'Started journey in creative development and 3D web experiences',
    },
  ];

  return (
    <div className="min-h-screen bg-black py-24">
      <div className="mx-auto max-w-7xl px-8">
        <SectionTitle title="About" subtitle="Get to know me" />

        <div className="grid gap-16 md:grid-cols-2">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-light text-white">Bio</h3>
            <p className="text-lg leading-relaxed text-white/80">
              Hi, I'm Anuroop Vijayan — a creative developer who blends code, design, and 3D experiences. 
              I build immersive digital products using WebGL, Three.js, and intuitive UI.
            </p>
            <p className="text-lg leading-relaxed text-white/80">
              My passion lies in creating interactive web experiences that push the boundaries of what's 
              possible in the browser. I combine technical expertise with creative vision to build 
              products that are both functional and beautiful.
            </p>
          </motion.div>

          {/* 3D Sphere */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-96"
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.4} />
              <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
              <pointLight position={[-5, -5, -5]} intensity={0.3} color="#ffffff" />
              <WobblingSphere />
            </Canvas>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24"
        >
          <h3 className="mb-12 text-center text-3xl font-light text-white">Experience</h3>
          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative border-l-2 border-white/20 pl-8"
              >
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-white/40" />
                <div className="mb-2 text-2xl font-light text-white">{item.year}</div>
                <div className="mb-2 text-xl font-semibold text-white">{item.title}</div>
                <p className="text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

