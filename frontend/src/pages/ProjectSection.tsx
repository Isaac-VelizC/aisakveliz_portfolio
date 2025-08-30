import { useRef } from "react";
import ProjectGradientBackground from "./Components/ProjectGradientBackground";
import { useInView, motion, type Variants } from "framer-motion";
import { containerVariants } from "../utils/AnimateVariantsUtils";
import HeaderComponent from "../components/HeaderComponent";
import { contentText } from "../utils/dataUtils";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import GridProjects from "./Components/GridProjects";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <ProjectGradientBackground sectionRef={sectionRef} />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <HeaderComponent title={contentText.portfolio.title} />

          <motion.h2
            variants={headerVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-textlight">Mis </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentcolor via-neonCyan to-neonPurple">
              Proyectos
            </span>
          </motion.h2>

          <motion.p
            variants={headerVariants}
            className="text-lg md:text-xl text-textmuted max-w-3xl mx-auto leading-relaxed"
          >
            {contentText.portfolio.description}
          </motion.p>
        </motion.div>
        {/* Project Filter */}
        <GridProjects isInView={isInView} />
        
        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/Isaac-VelizC" // Reemplaza con tu GitHub
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accentcolor/10 to-neonPurple/10 border border-accentcolor/30 rounded-2xl font-semibold text-accentcolor hover:bg-gradient-to-r hover:from-accentcolor hover:to-neonCyan hover:text-white transition-all duration-300"
          >
            <FaGithub className="w-5 h-5" />
            Ver todos los proyectos en GitHub
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
