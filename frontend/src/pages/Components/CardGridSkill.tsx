import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import type { TechnologyInterface } from "../../interface/Category";
import { iconMap } from "../../utils/iconMap";

type Props = {
  catName: string;
  skill: TechnologyInterface;
  techIndex: number;
  catIndex: number;
  inView: boolean;
};

const techItemVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateY: -15,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const CardGridSkill = ({
  catName,
  skill,
  techIndex,
  catIndex,
  inView,
}: Props) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const expertiseLevel = skill.level;
  const isHovered = hoveredTech === `${catName}-${skill.name}`;

  return (
    <motion.div
      variants={techItemVariants}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        z: 50,
      }}
      onHoverStart={() => setHoveredTech(`${catName}-${name}`)}
      onHoverEnd={() => setHoveredTech(null)}
      className="group relative"
    >
      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-primarylight/50 to-primarylight/20 border border-accentcolor/10 backdrop-blur-sm hover:border-accentcolor/40 transition-all duration-300 overflow-hidden">
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accentcolor/10 to-neonPurple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
          animate={isHovered ? { opacity: 0.1 } : { opacity: 0 }}
        />

        {/* Icon */}
        <motion.div
          className="text-4xl mb-3 text-accentglow group-hover:text-accentcolor transition-colors duration-300"
          whileHover={{
            rotateY: 360,
            scale: 1.2,
          }}
          transition={{
            rotateY: { duration: 0.6 },
            scale: { duration: 0.2 },
          }}
        >
          {iconMap[skill.icon] || null}
        </motion.div>

        {/* Name */}
        <h4 className="font-semibold text-textlight group-hover:text-accentcolor transition-colors duration-300 mb-3">
          {skill.name}
        </h4>

        {/* Expertise bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="text-textmuted">Expertise</span>
            <span className="text-accentcolor font-medium">
              {expertiseLevel}%
            </span>
          </div>
          <div className="w-full h-1 bg-primarylight/50 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accentcolor to-neonCyan"
              initial={{ width: 0 }}
              animate={inView ? { width: `${expertiseLevel}%` } : {}}
              transition={{
                duration: 1,
                delay: catIndex * 0.1 + techIndex * 0.05,
                ease: "easeOut",
              }}
            />
          </div>
        </div>

        {/* Hover tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-primarydark border border-accentcolor/30 rounded-lg text-xs text-accentcolor whitespace-nowrap pointer-events-none"
        >
          {expertiseLevel >= 90
            ? "Expert"
            : expertiseLevel >= 80
            ? "Advanced"
            : expertiseLevel >= 70
            ? "Intermediate"
            : "Beginner"}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primarydark border-r border-b border-accentcolor/30 rotate-45" />
        </motion.div>

        {/* Floating particles */}
        {isHovered && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [0, 20, 40],
                y: [0, -20, -40],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute top-4 right-4 w-1 h-1 bg-accentcolor rounded-full"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [0, -15, -30],
                y: [0, -25, -50],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: 0.3,
              }}
              className="absolute bottom-6 left-4 w-1 h-1 bg-neonCyan rounded-full"
            />
          </>
        )}
      </div>
    </motion.div>
  );
};

export default CardGridSkill;
