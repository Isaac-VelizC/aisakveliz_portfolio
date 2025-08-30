import { useEffect, useRef, useState } from "react";
import AboutGradientBackground from "./Components/AboutGradientBackground";
import ScrollIndicator from "../components/ScrollIndicator";
import { useInView, motion, type Variants } from "framer-motion";
import HeaderComponent from "../components/HeaderComponent";
import { containerVariants } from "../utils/AnimateVariantsUtils";
import ImageSectionAbout from "./Components/ImageSectionAbout";
import { InfoService } from "../api/fetchService";
import type { AboutInfoInterface } from "../interface/About";
import { contentText } from "../utils/dataUtils";

// Variants centralizados
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Descargar documento
const downloadDocument = () => {
  const link = document.createElement("a");
  link.href = "curriculum";
  link.download = "IsaacVeliz_hoja-de-vida.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();
};

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [data, setData] = useState<AboutInfoInterface | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Animaciones de scroll
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Fetch data
  useEffect(() => {
    const fetchAboutInfo = async () => {
      try {
        const { data } = await InfoService.getAbout();
        setData(data);
      } catch (error) {
        console.error("Error fetching about info:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAboutInfo();
  }, []);

  if (isLoading) <div>Cargando...</div>;

  return (
    <section
      ref={sectionRef}
      id="aboutMe"
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <AboutGradientBackground sectionRef={sectionRef} />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <HeaderComponent title={"Conóceme mejor"} />
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image Section */}
          <ImageSectionAbout />

          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Large title background */}
            <div className="relative">
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-textlight mb-4 relative z-10"
              >
                Sobre{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentcolor to-neonCyan">
                  mí
                </span>
              </motion.h2>
            </div>

            {/* Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg md:text-xl text-textmuted leading-relaxed">
                {data?.content}
              </p>

              {/* Skills or highlights */}
              <div className="grid grid-cols-2 gap-4 py-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-accentcolor/10 to-neonCyan/10 border border-accentcolor/20 backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-accentcolor">
                    {data?.years_of_experience}
                  </div>
                  <div className="text-sm text-textmuted">Años experiencia</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-neonPurple/10 to-neonPink/10 border border-neonPurple/20 backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-neonPurple">
                    {data?.projects}
                  </div>
                  <div className="text-sm text-textmuted">Proyectos</div>
                </motion.div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,183,255,0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-accentcolor to-neonCyan rounded-xl font-semibold text-white transition-all duration-300 overflow-hidden"
                onClick={downloadDocument}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  {contentText.about.buttonDownload}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neonCyan to-neonPurple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="px-8 py-4 border-2 border-accentcolor/30 text-accentcolor rounded-xl font-semibold transition-all duration-300 hover:bg-accentcolor/10 hover:border-accentcolor flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                
                  {contentText.about.buttonCTA}
              </motion.a>
            </motion.div>

            {/* Tech stack or additional info */}
            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-textmuted/10"
            >
              <p className="text-sm text-textmuted mb-4">
                Tecnologías principales:
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Laravel", "Django"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="px-3 py-1 text-xs font-medium bg-accentcolor/10 text-accentcolor rounded-full border border-accentcolor/20"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <ScrollIndicator isInView={isInView} />
    </section>
  );
};

export default AboutSection;
