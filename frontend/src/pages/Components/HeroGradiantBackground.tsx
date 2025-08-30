import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroGradiantBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // Parallax effect para el mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 25,
        y: (e.clientY - window.innerHeight / 2) / 25,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient backgrounds */}
      <motion.div
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accentcolor/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{
          x: mousePosition.x * -0.5,
          y: mousePosition.y * -0.5,
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neonPurple/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{
          x: mousePosition.x * 0.3,
          y: mousePosition.y * 0.3,
        }}
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-neonPink/10 rounded-full blur-3xl"
      />
    </div>
  );
};

export default HeroGradiantBackground;
