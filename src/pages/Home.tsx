import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Particles } from '../components/3d/Particles';
import { LightRig } from '../components/3d/LightRig';
import { Mesh } from 'three';

/**
 * Wobbling sphere component for About section
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
 * Home page component
 * Fullscreen hero with 3D canvas, followed by About, Work, and Contact sections
 * Note: HeroCanvas is rendered in AppRouter to ensure loading tracking works
 */
export const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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

  const projects = [
    {
      id: 1,
      title: 'Interactive 3D Portfolio',
      description: 'A WebGL-powered portfolio showcasing creative development work',
      tags: ['React', 'Three.js', 'WebGL'],
      image: 'https://via.placeholder.com/600x400/1e293b/60a5fa?text=Project+1',
    },
    {
      id: 2,
      title: 'Immersive Web Experience',
      description: 'An interactive website with shader-based effects and animations',
      tags: ['React', 'GSAP', 'Shaders'],
      image: 'https://via.placeholder.com/600x400/1e293b/60a5fa?text=Project+2',
    },
    {
      id: 3,
      title: 'Creative Agency Website',
      description: 'Modern agency website with smooth scrolling and 3D elements',
      tags: ['React', 'Framer Motion', 'Three.js'],
      image: 'https://via.placeholder.com/600x400/1e293b/60a5fa?text=Project+3',
    },
    {
      id: 4,
      title: 'WebGL Visualization',
      description: 'Data visualization tool using WebGL for performance',
      tags: ['WebGL', 'D3.js', 'React'],
      image: 'https://via.placeholder.com/600x400/1e293b/60a5fa?text=Project+4',
    },
    {
      id: 5,
      title: 'Interactive Product Showcase',
      description: '3D product configurator with real-time rendering',
      tags: ['Three.js', 'React', 'WebGL'],
      image: 'https://via.placeholder.com/600x400/1e293b/60a5fa?text=Project+5',
    },
    {
      id: 6,
      title: 'Creative Landing Page',
      description: 'Animated landing page with particle effects and transitions',
      tags: ['React', 'GSAP', 'Canvas'],
      image: 'https://via.placeholder.com/600x400/1e293b/60a5fa?text=Project+6',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! (Form submission not yet implemented)');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen">
        <div className="z-10 relative flex justify-center items-center min-h-screen pointer-events-none">
          <div className="mx-auto px-8 max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mx-auto font-light text-white/90 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
              Anuroop Vijayan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mx-auto mt-4 sm:mt-6 max-w-2xl font-light text-white/90 text-sm sm:text-base md:text-lg lg:text-xl"
            >
              Creative Developer
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-black opacity-85 py-24 min-h-screen">
        <div className="mx-auto px-8 max-w-7xl">
          <SectionTitle title="About" subtitle="Get to know me" />

          <div className="gap-16 grid md:grid-cols-2">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="font-light text-white text-3xl">Bio</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Hi, I'm Anuroop Vijayan — a creative developer who blends code,
                design, and 3D experiences. I build immersive digital products
                using WebGL, Three.js, and intuitive UI.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                My passion lies in creating interactive web experiences that
                push the boundaries of what's possible in the browser. I combine
                technical expertise with creative vision to build products that
                are both functional and beautiful.
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
                <directionalLight
                  position={[5, 5, 5]}
                  intensity={0.8}
                  color="#ffffff"
                />
                <pointLight
                  position={[-5, -5, -5]}
                  intensity={0.3}
                  color="#ffffff"
                />
                <WobblingSphere />
              </Canvas>
            </motion.div>
          </div>

          {/* Timeline Section */}
          <div className="relative gap-16 grid md:grid-cols-2 bg-black opacity-100">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-24"
            >
              <h3 className="mb-12 font-light text-white text-3xl text-center">
                Experience
              </h3>
              <div className="space-y-8">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative pl-8 border-white/20 border-l-2"
                  >
                    <div className="top-0 -left-2 absolute bg-white/40 rounded-full w-4 h-4" />
                    <div className="mb-2 font-light text-white text-2xl">
                      {item.year}
                    </div>
                    <div className="mb-2 font-semibold text-white text-xl">
                      {item.title}
                    </div>
                    <p className="text-white/70">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="bg-black py-24 min-h-screen">
        <div className="mx-auto px-8 max-w-7xl">
          <SectionTitle title="Work" subtitle="Selected projects" />

          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 rounded-lg overflow-hidden transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="mb-2 font-light text-white group-hover:text-white text-xl transition-colors">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-white/70 text-sm">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/10 px-3 py-1 rounded-full text-white/70 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="-z-10 absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-white/60">More projects coming soon...</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black py-24 min-h-screen">
        <div className="mx-auto px-8 max-w-7xl">
          <SectionTitle title="Contact" subtitle="Let's work together" />

          <div className="gap-16 grid md:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 font-medium text-white text-sm"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 backdrop-blur-sm px-4 py-3 border border-white/10 focus:border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 w-full text-white transition-all placeholder-white/50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-medium text-white text-sm"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 backdrop-blur-sm px-4 py-3 border border-white/10 focus:border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 w-full text-white transition-all placeholder-white/50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 font-medium text-white text-sm"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-white/5 backdrop-blur-sm px-4 py-3 border border-white/10 focus:border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 w-full text-white transition-all placeholder-white/50"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 hover:bg-white/20 px-6 py-3 border border-white/20 hover:border-white/30 rounded-lg w-full font-light text-white transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Particle Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-black/50 border border-white/10 rounded-lg h-96"
            >
              <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <LightRig />
                <Particles count={200} />
                <fog attach="fog" args={["#0a0a0a", 5, 15]} />
              </Canvas>
            </motion.div>
          </div>

          {/* Additional Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <p className="mb-4 text-white/60">
              Or reach out directly at{" "}
              <a
                href="mailto:hello@anuroopvijayan.com"
                className="text-white/80 hover:text-white transition-colors"
              >
                hello@anuroopvijayan.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

