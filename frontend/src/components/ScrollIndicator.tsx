import { motion } from "framer-motion";

type Props = {
    isInView: boolean
}

const ScrollIndicator = ({ isInView }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1, delay: 1.5 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex flex-col items-center gap-2 text-textmuted"
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent via-accentcolor to-transparent opacity-50" />
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
