import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';

/**
 * Custom hook to initialize Lenis smooth scrolling
 * Integrates with GSAP for animations (ScrollTrigger optional)
 */
export const useSmoothScroll = () => {
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Initialize Lenis with faster, more responsive settings
    const lenis = new Lenis({
      duration: 0.6, // Faster response time
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.7, // More immediate response
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Start animation frame loop immediately
    const raf = (time: number) => {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    };
    rafIdRef.current = requestAnimationFrame(raf);

    // Try to register ScrollTrigger if available (non-blocking)
    import('gsap/ScrollTrigger')
      .then((module) => {
        const { ScrollTrigger } = module;
        gsap.registerPlugin(ScrollTrigger);
        lenis.on('scroll', ScrollTrigger.update);
      })
      .catch(() => {
        // ScrollTrigger not available, continue without it
      });

    // Cleanup
    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      lenis.destroy();
    };
  }, []);
};

