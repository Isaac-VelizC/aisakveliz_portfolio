import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const ContactCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="text-center mt-16 p-8 bg-gradient-to-r from-accentcolor/5 via-neonPurple/5 to-neonPink/5 backdrop-blur-sm border border-accentcolor/10 rounded-3xl"
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-4xl mb-4"
      >
        💫
      </motion.div>
      <h3 className="text-2xl font-bold text-textlight mb-4">
        ¿Listo para hacer realidad tu proyecto?
      </h3>
      <p className="text-textmuted max-w-2xl mx-auto leading-relaxed">
        Transformemos tus ideas en soluciones digitales extraordinarias. Cada
        gran proyecto comienza con una conversación.
      </p>
      <motion.div
        className="mt-6 flex items-center justify-center gap-2 text-accentcolor"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-medium">¡Contactémonos hoy!</span>
        <FaHeart className="w-4 h-4 text-neonPink" />
      </motion.div>
    </motion.div>
  );
};

export default ContactCTA;
