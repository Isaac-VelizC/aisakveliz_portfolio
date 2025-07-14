import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTopClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-primarydark text-textlight overflow-hidden">
      {/* Neon Blur Decorations */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-accentcolor blur-[100px] opacity-20 rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-[-100px] left-[-120px] w-[250px] h-[250px] bg-accentcolor blur-3xl opacity-15 rounded-full z-0 animate-pulse" />

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={handleBackToTopClick}
            aria-label="Volver arriba"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="
              fixed right-8 bottom-8 
              w-10 h-10 rounded-xl
              bg-accentcolor text-white 
              shadow-lg hover:shadow-xl 
              flex items-center justify-center 
              z-50
              focus:outline-none focus:ring-4 focus:ring-accentcolor/50
              transition-shadow duration-300
              cursor-pointer
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              fill="currentColor"
              viewBox="0 -960 960 960"
              aria-hidden="true"
            >
              <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
