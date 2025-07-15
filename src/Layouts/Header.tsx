import { useEffect, useRef, useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import LogoName from "../components/Logoname";

const navigationItems = [
  { name: "Inicio", ref: "#hero", activeClass: "home" },
  { name: "Sobre mí", ref: "#aboutMe", activeClass: "aboutMe" },
  { name: "Habilidades", ref: "#technologies", activeClass: "technologies" },
  { name: "Proyectos", ref: "#projects", activeClass: "projects" },
  { name: "Contacto", ref: "#contactMe", activeClass: "contactMe" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const scrollToRef = (ref: string) => {
    const el = document.querySelector(ref);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigation = (activeClass: string, ref: string) => {
    setActive(activeClass);
    scrollToRef(ref);
    setOpen(false);
  };

  // Aquí el efecto para actualizar active según scroll
  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Ajusta el offset para que active un poco antes

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

    // Llamada inicial para setear active si ya está scrolleado al cargar
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className="fixed top-0 w-full z-99 bg-transparent backdrop-blur-sm transition duration-300 ease-in-out"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4 font-medium xl:px-12">
        <a href="#hero" className="cursor-pointer z-999" aria-label="Homepage">
          <LogoName inicial="AI" name="sakVeliz" textsize="text-2xl" />
        </a>
        <LayoutGroup>
          <motion.ul className="hidden md:flex items-center gap-12 font-bold text-white relative">
            {navigationItems.map(({ name, activeClass, ref }) => {
              const isActive = active === activeClass;

              return (
                <motion.li
                  key={name}
                  onClick={() => handleNavigation(activeClass, ref)}
                  className="cursor-pointer font-sans transition duration-300 hover:text-accentcolor relative"
                  role="link"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleNavigation(activeClass, ref)
                  }
                  aria-current={isActive ? "page" : undefined}
                  style={{ paddingBottom: "0.25rem" }}
                  layout
                >
                  {name}
                  {isActive && (
                    <motion.div
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-accentcolor rounded"
                      layoutId="underline"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.li>
              );
            })}
          </motion.ul>
        </LayoutGroup>

        <button
          className="md:hidden text-white focus:outline-none z-99"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="36"
            width="36"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <motion.ul
          ref={menuRef}
          initial={{ x: "-100%" }}
          animate={{ x: open ? 0 : "-100%" }}
          transition={{ type: "spring", stiffness: 120 }}
          className="fixed top-0 left-0 h-auto w-full z-99 bg-primarydark/95 py-24 px-6 space-y-6 text-center md:hidden shadow-lg"
          role="menu"
          aria-label="Mobile Navigation"
        >
          {navigationItems.map(({ name, activeClass, ref }) => (
            <li
              key={name}
              onClick={() => handleNavigation(activeClass, ref)}
              className={`cursor-pointer text-lg rounded-lg p-3 font-bold text-white transition duration-700 hover:bg-accentcolor/10 ${
                active === activeClass ? "border-y-2 border-accentcolor" : ""
              }`}
              role="menuitem"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && handleNavigation(activeClass, ref)
              }
              aria-current={active === activeClass ? "page" : undefined}
            >
              {name}
            </li>
          ))}
        </motion.ul>
      </div>
    </nav>
  );
};

export default Header;
