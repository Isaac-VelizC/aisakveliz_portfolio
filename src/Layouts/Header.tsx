import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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

  return (
    <nav
      id="navbar"
      className="fixed top-0 w-full z-99 bg-transparent backdrop-blur-sm transition duration-300 ease-in-out"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4 font-medium xl:px-12">
        <a
          href="#hero"
          className="cursor-pointer z-999"
          aria-label="Homepage"
        >
          <LogoName inicial="AI" name="sakVeliz" textsize="text-2xl" />
        </a>

        <ul className="hidden md:flex items-center gap-12 font-bold text-white">
          {navigationItems.map(({ name, activeClass, ref }) => (
            <li
              key={name}
              onClick={() => handleNavigation(activeClass, ref)}
              className={`cursor-pointer font-sans transition duration-700 hover:text-[var(--color-accentcolor)] ${
                active === activeClass
                  ? "border-b-2 border-[var(--color-accentcolor)] pb-1"
                  : ""
              }`}
              role="link"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && handleNavigation(activeClass, ref)
              }
              aria-current={active === activeClass ? "page" : undefined}
            >
              {name}
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white focus:outline-none z-999"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {!open ? (
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
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="36"
              width="36"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="z-99"
            >
              <path
                d="M6 6l12 12M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
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
