import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTopButton = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {showBackToTop && (
        <motion.div
          className="fixed right-6 bottom-6 z-40"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 25,
            duration: 0.4
          }}
        >

          {/* Botón principal */}
          <motion.button
            onClick={handleBackToTopClick}
            aria-label="Volver arriba"
            className="
              relative w-14 h-14 rounded-full
              flex items-center justify-center 
              cursor-pointer
              focus:outline-none
              overflow-hidden
              group
            "
            style={{
              background: 'linear-gradient(135deg, var(--color-accentcolor), var(--color-neonPurple))',
              boxShadow: `
                0 0 20px rgba(0, 183, 255, 0.4),
                0 0 40px rgba(0, 183, 255, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.2)
              `
            }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: `
                0 0 30px rgba(0, 183, 255, 0.6),
                0 0 60px rgba(0, 183, 255, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.3)
              `
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Ícono de flecha */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              fill="white"
              viewBox="0 -960 960 960"
              aria-hidden="true"
              className="relative z-20 drop-shadow-sm"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
            </motion.svg>
          </motion.button>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;