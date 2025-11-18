import { motion } from 'framer-motion';
import { HeroCanvas } from '../components/3d/HeroCanvas';

/**
 * Home page component
 * Fullscreen hero with 3D canvas (name is now in 3D)
 */
export const Home = () => {
  return (
    <div className="relative min-h-screen">
      <HeroCanvas />
      
      {/* Optional overlay text - can be removed if 3D text is sufficient */}
      <div className="z-10 relative flex justify-center items-center min-h-screen pointer-events-none">
        <div className="mx-auto px-8 max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ fontSize: '60px',fontWeight: '400' }}
            className="mx-auto font-light text-white/90 text-lg"
          >
            Anuroop Vijayan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 32 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ fontSize: '20px',fontWeight: '400' }}
            className="mx-auto max-w-2xl font-light text-white/90 text-lg"
          >
            Creative Developer
          </motion.p>
        </div>
      </div>
    </div>
  );
};

