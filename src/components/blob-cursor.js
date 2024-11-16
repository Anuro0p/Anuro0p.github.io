import React, { useEffect, useRef } from 'react';
import './styles.css'; // Assuming you have a CSS file for the blob's styles.

const BlobCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        cursorRef.current.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
        console.log('hello')
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const addHoverClass = () => {
      document.querySelector('.custom-cursor').classList.add('hovered');
    };
  
    const removeHoverClass = () => {
      document.querySelector('.custom-cursor').classList.remove('hovered');
    };
  
    const hoverTargets = document.querySelectorAll('a, button, [data-cursor-hover]');
    
    hoverTargets.forEach((target) => {
      target.addEventListener('mouseenter', addHoverClass);
      target.addEventListener('mouseleave', removeHoverClass);
    });
  
    return () => {
      hoverTargets.forEach((target) => {
        target.removeEventListener('mouseenter', addHoverClass);
        target.removeEventListener('mouseleave', removeHoverClass);
      });
    };
  }, []);
  

  return <div ref={cursorRef} className="blob"></div>;
};

export default BlobCursor;
