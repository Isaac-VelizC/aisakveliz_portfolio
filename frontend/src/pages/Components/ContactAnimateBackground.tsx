import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  sectionRef: React.RefObject<HTMLElement | null>;
};

const ContactAnimateBackground = ({ sectionRef }: Props) => {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Animated particles */}
      <motion.div style={{ y, rotate }} className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className={`absolute w-2 h-2 bg-accentcolor/20 rounded-full`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
          />
        ))}
      </motion.div>

      {/* Gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-40 -right-20 w-96 h-96 bg-accentcolor/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute -bottom-40 -left-20 w-80 h-80 bg-neonPurple/10 rounded-full blur-3xl"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `
              linear-gradient(rgba(0,183,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,183,255,0.1) 1px, transparent 1px)
            `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

export default ContactAnimateBackground;
