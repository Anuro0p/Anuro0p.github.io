import { motion } from 'framer-motion';

/**
 * Footer component
 * Simple footer with social links and copyright
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black/50 backdrop-blur-sm py-12 border-white/10 border-t">
      <div className="mx-auto px-8 max-w-7xl">
        <div className="flex md:flex-row flex-col justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white/60 text-sm"
          >
            © {currentYear} Anuroop Vijayan. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-6"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              Twitter
            </a>
            <p className="text-white/60 text-sm">
              "BLOOM LIGHT AND MOUNTAIN" (https://skfb.ly/onzzF) by Nurfaamk is
              licensed under Creative Commons Attribution
              (http://creativecommons.org/licenses/by/4.0/).
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

