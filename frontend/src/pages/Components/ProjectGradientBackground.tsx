import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  sectionRef: React.RefObject<HTMLElement | null>;
};

const ProjectGradientBackground = ({ sectionRef }: Props) => {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.7]
  );

  return (
    <div className="absolute inset-0 pointer-events-none">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        {/* Animated grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
                linear-gradient(rgba(0,183,255,0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,183,255,0.2) 1px, transparent 1px)
              `,
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      {/* Gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-accentcolor/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 -left-40 w-96 h-96 bg-neonPurple/30 rounded-full blur-3xl"
      />
    </div>
  );
};

export default ProjectGradientBackground;
