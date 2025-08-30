import { motion, type Variants } from "framer-motion";
import type { ServiceInterface } from "../../interface/Service";
import { randomGradient } from "../../utils/funtionsUtils";
import { iconMap } from "../../utils/iconMap";

type Props = {
  service: ServiceInterface;
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    rotateX: 15,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const CardService = ({ service }: Props) => {
  const gradient = randomGradient();
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      className="group relative overflow-hidden rounded-2xl p-8 h-full cursor-pointer"
      style={{
        backgroundColor: "#121826",
        border: "1px solid rgba(30, 41, 59, 0.5)",
      }}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      {/* Glow border effect */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
      />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className={`inline-flex p-3 rounded-xl mb-6 bg-gradient-to-br ${gradient}`}
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-primarydark">{iconMap[service.icon] || null}</div>
        </motion.div>

        {/* Content */}
        <h3 className="text-xl text-textlight font-bold mb-4 group-hover:text-white transition-colors duration-300">
          {service.title}
        </h3>

        <p className="mb-6 leading-relaxed" style={{ color: "#94a3b8" }}>
          {service.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {service.technologies?.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              className="text-xs px-3 py-1 text-accentcolor border-accentcolor/30 bg-accentcolor/10 rounded-full border transition-all duration-300"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(0, 183, 255, 0.2)",
                borderColor: "#00b7ff",
              }}
            >
              {tech.name}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CardService;
