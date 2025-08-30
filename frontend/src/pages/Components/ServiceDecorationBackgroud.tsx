import { motion } from "framer-motion";

const ServiceDecorationBackgroud = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #00b7ff 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #bd00ff 0%, transparent 70%)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
};

export default ServiceDecorationBackgroud;
