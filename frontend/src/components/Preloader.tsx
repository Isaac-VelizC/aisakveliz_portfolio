import { motion, AnimatePresence, type Variants } from 'framer-motion';

// Variantes de animación para el contenedor principal
const containerVariants: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
  },
  hidden: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.8,
      ease: 'easeInOut'
    }
  }
};

// Variantes para el texto principal
const textVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3
    }
  }
};

const letterVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.8
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  }
};

// Variantes para los indicadores de carga
const dotVariants: Variants = {
  animate: {
    scale: [1, 1.5, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

const Preloader = () => {
  return (
    <AnimatePresence>
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          variants={containerVariants}
          initial="visible"
          animate="visible"
          exit="hidden"
          style={{
            background: `linear-gradient(135deg, var(--color-primarydark) 0%, var(--color-secondarydark) 100%)`,
          }}
        >
          {/* Grid animado de fondo */}
          <motion.div 
            className="absolute inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="absolute inset-0"
              animate={{
                backgroundPosition: ['0px 0px', '50px 50px']
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 183, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 183, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
            />
          </motion.div>

          {/* Contenedor principal */}
          <div className="relative z-10 text-center">
            
            {/* Símbolos tecnológicos */}
            <div className="flex items-center justify-center space-x-6 mb-8">
              {/* Texto principal con efecto typing */}
              <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center"
              >
                <div className="text-xl md:text-5xl xl:text-7xl font-bold tracking-wide">
                  {'AIsakVeliz'.split('').map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={letterVariants}
                      className="inline-block text-textlight "
                      style={{
                        textShadow: '0 0 25px var(--color-accentcolor), 0 0 35px var(--color-accentglow)'
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Subtítulo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="text-sm font-mono tracking-[0.3em] mb-8 text-textmuted"
            >
              DEVELOPER.PORTFOLIO
            </motion.div>

            {/* Indicadores de carga */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.3 }}
              className="flex justify-center space-x-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  variants={dotVariants}
                  animate="animate"
                  style={{ animationDelay: `${i * 0.2}s` }}
                  className="w-2 h-2 rounded-full bg-accentcolor shadow-neonCyan-lg"
                />
              ))}
            </motion.div>

          </div>
        </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;