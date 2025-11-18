import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * Custom hook for cursor effects
 * Handles cursor position tracking and hover effects
 */
export const useCursorEffects = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!cursorRef.current || !followerRef.current) return;

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;

      // Update cursor position immediately
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0,
        });
      }
    };

    // Smooth follower animation
    const animate = () => {
      mouseRef.current.x += (targetRef.current.x - mouseRef.current.x) * 0.15;
      mouseRef.current.y += (targetRef.current.y - mouseRef.current.y) * 0.15;

      if (followerRef.current) {
        gsap.to(followerRef.current, {
          x: mouseRef.current.x,
          y: mouseRef.current.y,
          duration: 0.3,
          ease: 'power2.out',
        });
      }

      requestAnimationFrame(animate);
    };
    animate();

    // Handle hover effects on links and buttons
    const handleMouseEnter = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          scale: 1.5,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
      if (followerRef.current) {
        gsap.to(followerRef.current, {
          scale: 2,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
      if (followerRef.current) {
        gsap.to(followerRef.current, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    // Attach hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return { cursorRef, followerRef };
};

