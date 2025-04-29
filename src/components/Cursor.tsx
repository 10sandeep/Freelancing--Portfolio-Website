import React, { useState, useEffect } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show cursor after a short delay (prevents initial position jump)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseDown = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 300);
    };

    const handleMouseUp = () => {
      setClicked(false);
    };

    // Check if cursor is hovering over clickable elements
    const handleLinkHover = () => {
      const hoveredElements = document.querySelectorAll('a:hover, button:hover, input:hover, textarea:hover, select:hover, [role="button"]:hover');
      setHoveredLink(hoveredElements.length > 0);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleLinkHover);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleLinkHover);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-transform duration-150 ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${clicked ? 'scale-75' : 'scale-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '12px',
          height: '12px',
          backgroundColor: '#0066ff',
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.15s ease-out, width 0.3s ease-out, height 0.3s ease-out, background-color 0.3s ease-out',
        }}
      />
      
      {/* Circle cursor outline */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full border border-white mix-blend-difference transition-all duration-300 ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${hoveredLink ? 'scale-150' : 'scale-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: hoveredLink ? '60px' : '40px',
          height: hoveredLink ? '60px' : '40px',
          transform: 'translate(-50%, -50%)',
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          transitionDuration: '0.6s',
        }}
      />
      
      {/* Additional glow effect when clicked */}
      <div
        className={`fixed pointer-events-none z-40 rounded-full transition-all duration-500 ${
          clicked ? 'opacity-30' : 'opacity-0'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: clicked ? '100px' : '0px',
          height: clicked ? '100px' : '0px',
          backgroundColor: 'rgba(138, 43, 226, 0.3)',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(10px)',
        }}
      />
    </>
  );
};

export default Cursor;