import { motion } from "framer-motion";

type Props = {
  isInView: boolean;
};

const CallAction = ({ isInView }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="text-center mt-20"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="inline-flex lg:flex-row flex-col items-center gap-4 px-8 py-4 bg-gradient-to-r from-accentcolor/10 to-neonPurple/10 border border-accentcolor/30 rounded-2xl backdrop-blur-sm"
      >
        <div className="text-2xl">💡</div>
        <div>
          <p className="text-lg font-semibold text-textlight">
            ¿Tienes un proyecto en mente?
          </p>
          <p className="text-sm text-textmuted">
            Conversemos sobre cómo puedo ayudarte
          </p>
        </div>
        <motion.a
          href="#contact"
          whileHover={{ x: 5 }}
          className="px-6 py-2 bg-accentcolor text-white rounded-xl font-medium hover:bg-neonCyan transition-colors duration-300"
        >
          Contactar
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default CallAction;
