import { motion, useScroll, useTransform, type Variants } from "framer-motion";

type Props = {
    sectionRef: React.RefObject<HTMLElement | null>;
}

const floatingVariants: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const SkillGradientBackground = ({ sectionRef }: Props) => {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0.5]
  );

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Animated background grid */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
                linear-gradient(rgba(0,183,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,183,255,0.1) 1px, transparent 1px)
              `,
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      {/* Floating geometric shapes */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 right-1/4 w-8 h-8 border-2 border-accentcolor/20 rotate-45"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
        className="absolute bottom-40 left-1/3 w-6 h-6 bg-neonPurple/20 rounded-full"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute top-1/3 left-20 w-4 h-4 border border-neonCyan/30"
      />

      {/* Gradient orbs */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-accentcolor/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
        className="absolute bottom-0 -left-40 w-96 h-96 bg-neonPurple/5 rounded-full blur-3xl"
      />
    </div>
  );
};

export default SkillGradientBackground;
