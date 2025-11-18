import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  progress: number;
  active: boolean;
}

/**
 * Modern 3D loader component
 * Shows animated loading state while 3D assets are loading
 */
export const Loader = ({ progress, active }: LoaderProps) => {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="z-50 fixed inset-0 flex justify-center items-center bg-black"
        >
          <div className="relative flex flex-col items-center gap-8">
            {/* Animated orb/sphere loader */}
            <div className="relative w-24 h-24">
              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-0 border-4 border-transparent border-t-[#7c5cff] border-r-[#5b4bff] rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              
              {/* Middle rotating ring */}
              <motion.div
                className="absolute inset-2 border-4 border-transparent border-b-[#6f2cff] border-l-[#7c5cff] rounded-full"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              
              {/* Inner pulsing orb */}
              <motion.div
                className="absolute inset-4 bg-gradient-to-br from-[#7c5cff] to-[#5b4bff] rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              {/* Glowing center dot */}
              <motion.div
                className="absolute inset-6 bg-[#7c5cff] rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  boxShadow: '0 0 20px rgba(124, 92, 255, 0.8), 0 0 40px rgba(124, 92, 255, 0.4)',
                }}
              />
            </div>

            {/* Progress bar */}
            <div className="bg-white/10 rounded-full w-64 h-1 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-[#7c5cff] via-[#5b4bff] to-[#6f2cff] h-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{
                  boxShadow: '0 0 10px rgba(124, 92, 255, 0.6)',
                }}
              />
            </div>

            {/* Loading text */}
            <motion.p
              className="font-light text-white/80 text-sm uppercase tracking-wider"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              Loading
            </motion.p>

            {/* Percentage display */}
            <motion.p
              className="font-mono text-[#7c5cff] text-xs tracking-wider"
              key={Math.floor(progress)}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {Math.floor(progress)}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

