import { useEffect, useRef, useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import { navigationItems } from "../utils/dataUtils";
import OverlayCloseMovil from "./components/OverlayCloseMovil";
import LogoName from "../components/LogoName";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const [active, setActive] = useState("home");
  // Efecto para detectar scroll y cambiar el fondo
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToRef = (ref: string) => {
    const el = document.querySelector(ref);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigation = (activeClass: string, ref: string) => {
    setActive(activeClass);
    scrollToRef(ref);
    setOpen(false);
  };

  // Efecto para actualizar active según scroll
  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = navigationItems.length - 1; i >= 0; i--) {
        const section = document.querySelector(navigationItems[i].ref);
        if (section) {
          const offsetTop =
            section.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= offsetTop) {
            setActive(navigationItems[i].activeClass);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        id="navbar"
        className="fixed top-0 w-full z-50 transition-all duration-500 ease-in-out"
        style={{
          background: scrolled ? "rgba(10, 15, 28, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "blur(5px)",
          borderBottom: scrolled
            ? "1px solid rgba(0, 183, 255, 0.2)"
            : "1px solid transparent",
        }}
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* Línea decorativa superior cuando está scrolled */}
        {scrolled && (
          <div className="absolute top-0 left-0 right-0 h-px opacity-60 bg-[linear-gradient(90deg,transparent,var(--color-accentcolor),var(--color-neonPurple),transparent)]" />
        )}
        <div className="container mx-auto flex items-center justify-between px-6 py-4 font-medium xl:px-12">
          <LogoName inicial="AI" name="sakVeliz" textsize="text-2xl" />
          {/* Navegación desktop */}
          <LayoutGroup>
            <motion.ul className="hidden md:flex items-center gap-8 font-medium text-white relative">
              {navigationItems.map(({ name, activeClass, ref }) => {
                const isActive = active === activeClass;

                return (
                  <motion.li
                    key={name}
                    onClick={() => handleNavigation(activeClass, ref)}
                    className="cursor-pointer relative px-4 py-2 rounded-lg transition-all duration-300"
                    tabIndex={0}
                    aria-current={isActive ? "page" : undefined}
                    whileHover={{
                      scale: 1.05,
                      color: "var(--color-accentcolor)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {name}

                    {/* Indicador activo mejorado */}
                    {isActive && (
                      <motion.div
                        className="absolute left-0 right-0 bottom-0 h-0.5 rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, var(--color-accentcolor), var(--color-neonPurple))",
                          boxShadow: "0 0 10px var(--color-accentcolor)",
                        }}
                        layoutId="underline"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.li>
                );
              })}
            </motion.ul>
          </LayoutGroup>

          {/* Botón hamburguesa mejorado */}
          <motion.button
            className="md:hidden relative text-textlight z-50 p-2 rounded-lg border transition-all duration-300"
            style={{
              borderColor: open
                ? "var(--color-accentcolor)"
                : "rgba(226, 232, 240, 0.2)",
              backgroundColor: open ? "rgba(0, 183, 255, 0.1)" : "transparent",
            }}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={open ? "open" : "closed"}
              className="w-6 h-6 relative"
            >
              <motion.span
                className="absolute block w-6 h-0.5 rounded-full bg-white"
                variants={{
                  closed: { rotate: 0, y: 0, opacity: 1 },
                  open: { rotate: 45, y: 8, opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute block w-6 h-0.5 rounded-full top-2 bg-white"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute block w-6 h-0.5 rounded-full top-4 bg-white"
                variants={{
                  closed: { rotate: 0, y: 0, opacity: 1 },
                  open: { rotate: -45, y: -8, opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.button>

          {/* Menú móvil mejorado */}
          <motion.ul
            ref={menuRef}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{
              x: open ? 0 : "-100%",
              opacity: open ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              opacity: { duration: 0.2 },
            }}
            className="fixed top-0 left-0 h-screen backdrop-filter backdrop-blur-xl w-full z-40 py-24 px-6 space-y-4 text-center md:hidden
              bg-[linear-gradient(135deg,_rgba(10,15,28,0.98)_0%,_rgba(18,24,38,0.95)_100%)]
              border-r border-r-accentcolor/20
            "
            role="menu"
            aria-label="Mobile Navigation"
          >
            {navigationItems.map(({ name, activeClass, ref }, index) => {
              const isActive = active === activeClass;

              return (
                <motion.li
                  key={name}
                  onClick={() => handleNavigation(activeClass, ref)}
                  className="cursor-pointer text-lg rounded-xl p-4 font-medium transition-all duration-300 mx-4"
                  style={{
                    color: isActive
                      ? "var(--color-accentcolor)"
                      : "var(--color-textlight)",
                    background: isActive
                      ? "linear-gradient(135deg, rgba(0, 183, 255, 0.15), rgba(189, 0, 255, 0.1))"
                      : "transparent",
                    border: isActive
                      ? "1px solid rgba(0, 183, 255, 0.3)"
                      : "1px solid transparent",
                    boxShadow: isActive
                      ? "0 0 20px rgba(0, 183, 255, 0.2)"
                      : "none",
                  }}
                  role="menuitem"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleNavigation(activeClass, ref)
                  }
                  aria-current={isActive ? "page" : undefined}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{
                    x: open ? 0 : -50,
                    opacity: open ? 1 : 0,
                  }}
                  transition={{
                    delay: open ? index * 0.1 : 0,
                    duration: 0.3,
                  }}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(0, 183, 255, 0.1)",
                    borderColor: "rgba(0, 183, 255, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {name}
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </nav>
      {open && <OverlayCloseMovil setOpen={setOpen} />}
    </>
  );
};

export default Header;
