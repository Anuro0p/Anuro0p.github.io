import { useEffect } from 'react';
import { useCursorEffects } from '../../hooks/useCursorEffects';

/**
 * Custom elegant cursor component
 * Creates a smooth, subtle cursor effect with hover interactions
 */
export const CustomCursor = () => {
  const { cursorRef, followerRef } = useCursorEffects();

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Main cursor dot - white for dark background */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 mix-blend-difference"
        style={{ willChange: 'transform' }}
      />
      
      {/* Follower ring - subtle */}
      <div
        ref={followerRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 opacity-40"
        style={{
          willChange: 'transform',
        }}
      />
    </>
  );
};

