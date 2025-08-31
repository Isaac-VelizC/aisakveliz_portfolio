import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import SkillGradientBackground from "./Components/SkillGradientBackground";
import CallAction from "./Components/CallActionCard";
import HeaderComponent from "../components/HeaderComponent";
import { containerVariants } from "../utils/AnimateVariantsUtils";
import TechnologyGrid from "./Components/TechnologyGrid";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const TechnologiesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="technologies"
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <SkillGradientBackground sectionRef={sectionRef} />

      <div className="container mx-auto px-2 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <HeaderComponent title="Conocimientos" />

          <motion.h1
            variants={headerVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-textlight">Stack </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentcolor via-neonCyan to-neonPurple">
              Tecnológico
            </span>
          </motion.h1>

          <motion.p
            variants={headerVariants}
            className="text-lg md:text-xl text-textmuted max-w-3xl mx-auto leading-relaxed"
          >
            Stack Full Stack moderno con experiencia en frontend, backend y
            bases de datos.
          </motion.p>
        </motion.div>

        {/* Technologies Grid */}
        <TechnologyGrid inView={isInView} />

        {/* Call to Action */}
        <CallAction isInView={isInView} />
      </div>
    </section>
  );
};

export default TechnologiesSection;
