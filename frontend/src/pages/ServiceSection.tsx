import {
  AnimatePresence,
  motion,
  useInView,
  type Variants,
} from "framer-motion";
import HeaderComponent from "../components/HeaderComponent";
import { containerVariants } from "../utils/AnimateVariantsUtils";
import { useRef } from "react";
import ServiceDecorationBackgroud from "./Components/ServiceDecorationBackgroud";
import CardService from "./Components/CardService";
import { services } from "../assets/informacion.json";
// import type { ServiceInterface } from "../interface/Service";
// import { InfoService } from "../api/fetchService";

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

const ServiceSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // const [services, setServices] = useState<ServiceInterface[]>([]);
  // useEffect(() => {
  //   const fetchServices = async () => {
  //     const data = await InfoService.getServices();
  //     setServices(data);
  //   };
  //   fetchServices();
  // }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* Background decorative elements */}
      <ServiceDecorationBackgroud />

      <div className="container mx-auto px-2 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <HeaderComponent title="Servicios" />

          <motion.h2
            variants={headerVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-textlight">Transformo Ideas en </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentcolor via-neonCyan to-neonPurple">
              Código de Calidad
            </span>
          </motion.h2>

          <motion.p
            variants={headerVariants}
            className="text-lg md:text-xl text-textmuted max-w-3xl mx-auto leading-relaxed"
          >
            Ofrezco soluciones completas de desarrollo de software, desde
            aplicaciones web modernas hasta sistemas backend robustos, siempre
            enfocado en la calidad y la innovación.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {services.map((service) => (
              <CardService key={service.id} service={service} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.a
            className="inline-flex items-center bg-accentcolor/10 border-accentcolor gap-4 px-8 py-4 rounded-full border-2 cursor-pointer group relative overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 40px rgba(0, 183, 255, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            href="#contactMe"
          >
            <span className="text-lg font-semibold relative text-accentcolor z-10 group-hover:text-white transition-colors duration-300">
              ¿Tienes un proyecto en mente?
            </span>
            <motion.div
              className="w-6 h-6 rounded-full border-2 border-accentcolor"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-2 h-2 rounded-full absolute top-0.5 left-0.5 bg-accentglow" />
            </motion.div>

            {/* Hover background effect */}
            <div
              className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                backgroundImage: "linear-gradient(135deg, #00b7ff, #00ffff)",
              }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
