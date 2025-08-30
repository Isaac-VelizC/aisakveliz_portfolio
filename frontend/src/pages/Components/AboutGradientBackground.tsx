import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
    sectionRef: React.RefObject<HTMLElement | null>;
}

const AboutGradientBackground = ({ sectionRef }: Props) => {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.3, 1, 1, 0.3]
  );
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated background gradients */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-accentcolor/20 to-neonPurple/20 rounded-full blur-3xl"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
              linear-gradient(rgba(0,183,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,183,255,0.1) 1px, transparent 1px)
            `,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
};

export default AboutGradientBackground;
