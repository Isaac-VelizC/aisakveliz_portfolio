import React from 'react';
import { motion } from 'framer-motion';

interface LogoNameProps {
  inicial: string;
  name: string;
  textsize: string;
}

const LogoName: React.FC<LogoNameProps> = ({ inicial, name, textsize }) => {
  return (
    <motion.div
      className={`flex items-end font-extrabold gap-1 cursor-pointer ${textsize}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1, letterSpacing: '0.3em' }}
      whileTap={{ scale: 0.95 }}
      aria-label={`${inicial}${name} logo`}
      role="img"
      tabIndex={0}
    >
      <motion.h1
        className="text-accentcolor tracking-wide"
        transition={{ duration: 0.3 }}
      >
        {inicial}
      </motion.h1>
      <motion.h2
        className="text-white tracking-widest"
        transition={{ duration: 0.3 }}
      >
        {name}
      </motion.h2>
    </motion.div>
  );
};

export default LogoName;
