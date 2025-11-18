import { motion } from 'framer-motion';
import { SectionTitle } from '../components/ui/SectionTitle';

/**
 * Work page component
 * Grid of project cards with parallax hover effects
 */
export const Work = () => {
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

  return (
    <div className="min-h-screen bg-black py-24">
      <div className="mx-auto max-w-7xl px-8">
        <SectionTitle title="Work" subtitle="Selected projects" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/30"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-light text-white group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-white/70">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 -z-10 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        {/* TODO: Add more projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60">
            More projects coming soon...
          </p>
        </motion.div>
      </div>
    </div>
  );
};

