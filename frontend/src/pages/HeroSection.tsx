import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import HeroGradiantBackground from "./Components/HeroGradiantBackground";
import { containerVariants, itemVariants } from "../utils/AnimateVariantsUtils";
import { contentText } from "../utils/dataUtils";
import HeroButtons from "./Components/HeroButtons";
import SocialLinks from "../components/SocialLinks";

const glowVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Fondo animado con efectos de paralaje */}
      <HeroGradiantBackground />

      <div className="relative z-10 container mx-auto px-2 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-4 items-center min-h-screen py-20">
          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 lg:col-span-2"
            style={{ y }}
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-accentcolor/30 bg-accentcolor/5 backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-accentcolor rounded-full animate-pulse" />
              <span className="text-xs font-medium text-accentcolor uppercase tracking-wider">
                {"hello_world"}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 lg:col-end-1"
            >
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="block text-textlight">
                  {contentText.hero.greeting},
                </span>
                <span className="block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentcolor via-neonCyan to-neonPurple animate-pulse">
                    Ingeniero en Sistemas
                  </span>
                </span>
                <span className="block text-textlight">
                  y{" "}
                  <span className="relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPink to-accentcolor">
                      {contentText.hero.role}
                    </span>
                    <motion.span
                      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-accentcolor to-neonPink"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 1.5 }}
                    />
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-lg text-textmuted max-w-2xl leading-relaxed"
            >
              Construyo{" "}
              <span className="text-accentcolor font-semibold">
                soluciones digitales eficientes
              </span>{" "}
              y{" "}
              <span className="text-accentcolor font-semibold">
                centradas en el usuario
              </span>, impulsando proyectos que transforman ideas en productos tecnológicos de alto impacto.
            </motion.p>

            {/* CTA Buttons */}
            <HeroButtons linkWhatsApp={contentText.contact.whatsapp_link} />

            {/* Stats or Features */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 pt-8 border-t border-textmuted/10"
            >
              <div>
                <div className="text-2xl font-bold text-accentcolor">2+</div>
                <div className="text-sm text-textmuted">Años experiencia</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accentcolor">12</div>
                <div className="text-sm text-textmuted">
                  Proyectos completados
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accentcolor">100%</div>
                <div className="text-sm text-textmuted">
                  Satisfacción cliente
                </div>
              </div>
            </motion.div>
          </motion.div>
          <div className="lg:hidden block mt-16" />

          {/* Visual Element / Avatar */}
          <motion.div
            variants={glowVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center items-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accentcolor via-neonCyan to-neonPurple rounded-full blur-3xl opacity-20 animate-pulse" />

              {/* Main circle */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-2 border-accentcolor/30 bg-gradient-to-br from-accentcolor/10 to-neonPurple/10 backdrop-blur-xl flex items-center justify-center">
                {/* Inner content - could be avatar, code snippets, or geometric shapes */}
                <div className="text-6xl text-accentcolor">{"</>"}</div>

                {/* Floating elements */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity },
                  }}
                  className="absolute inset-4 rounded-full border border-neonCyan/30"
                />
                <motion.div
                  animate={{
                    rotate: -360,
                    scale: [1, 0.9, 1],
                  }}
                  transition={{
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity },
                  }}
                  className="absolute inset-8 rounded-full border border-neonPink/30"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <SocialLinks />
    </section>
  );
};

export default HeroSection;
