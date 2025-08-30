import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";

const PreviewOrvelayProject = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="bg-accentcolor/20 backdrop-blur-sm border border-accentcolor/50 rounded-full p-4 text-accentcolor"
      >
        <FaEye className="w-6 h-6" />
      </motion.div>
    </motion.div>
  );
};

export default PreviewOrvelayProject;
