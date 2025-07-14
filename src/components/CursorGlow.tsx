import React, { useEffect, useRef } from 'react';

const CursorGlow: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
      }
    };

    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999] h-4 w-4 rounded-full blur-xs bg-accentglow shadow-[0_0_15px_8px_rgba(35,61,255,0.15)] mix-blend-screen transition-transform duration-100 ease-out"
    ></div>
  );
};

export default CursorGlow;
