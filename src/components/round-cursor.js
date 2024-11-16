import React, { useEffect, useState } from 'react';
import './styles.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [positiondot, setPositiondot] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let cursorX = 0, cursorY = 0, targetX = 0, targetY = 0, dotX = 0, dotY = 0;
    const speed = 0.2;
  
    const animate = () => {
      cursorX += (targetX - cursorX) * speed;
      cursorY += (targetY - cursorY) * speed;
      dotX += (targetX - dotX) ;
      dotY += (targetY - dotY) ;
      
      setPosition({ x: cursorX, y: cursorY });
      setPositiondot({ x: dotX, y: dotY });
      requestAnimationFrame(animate);
    };
  
    const updateTarget = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };
  
    window.addEventListener('mousemove', updateTarget);
    animate();
  
    return () => {
      window.removeEventListener('mousemove', updateTarget);
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
  

  return (
    <>
   
    <div
      className="custom-cursor shadow-md shadow-[#1111116e]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
    <div
      className="custom-cursor-dot"
      style={{
        left: `${positiondot.x}px`,
        top: `${positiondot.y}px`,
      }}
    /> </>
  );
};

export default CustomCursor;
