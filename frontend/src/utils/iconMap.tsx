// src/utils/iconMap.tsx
import type { JSX } from "react";
import { BiCode } from "react-icons/bi";
import { DiGithub } from "react-icons/di";
import { 
  FaReact, 
  FaLaravel, 
  FaGitAlt, 
  FaHtml5, 
  FaCss3Alt, 
  FaUsers,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaCodepen,
  FaYoutube,
  FaTiktok,
  FaWhatsapp
} from "react-icons/fa";
import { FiSmartphone, FiZap } from "react-icons/fi";

import { 
  SiTailwindcss, 
  SiTypescript, 
  SiDjango, 
  SiMysql, 
  SiPostgresql, 
  SiFigma, 
  SiFlutter, 
  SiSqlite 
} from "react-icons/si";

// Diccionario de mapeo string -> componente de ícono
export const iconMap: Record<string, JSX.Element> = {
  react: <FaReact />,
  laravel: <FaLaravel />,
  git: <FaGitAlt />,
  html5: <FaHtml5 />,
  css3: <FaCss3Alt />,
  tailwind: <SiTailwindcss />,
  typescript: <SiTypescript />,
  django: <SiDjango />,
  mysql: <SiMysql />,
  postgresql: <SiPostgresql />,
  figma: <SiFigma />,
  flutter: <SiFlutter />,
  sqlite: <SiSqlite />,
  github: <DiGithub />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedin />,
  facebook: <FaFacebook />,
  codepen: <FaCodepen />,
  youtube: <FaYoutube />,
  tiktok: <FaTiktok />,
  whatsapp: <FaWhatsapp />,
  code: <BiCode className="w-8 h-8"/>,
  smartphone: <FiSmartphone className="w-8 h-8" />,
  zap: <FiZap className="w-8 h-8" />,
  users: <FaUsers className="w-8 h-8" />
};



/**
 * 
const services = [
  {
    icon: <BiCode className="w-8 h-8" />,
    title: "Desarrollo Full Stack",
    description:
      "Construyo soluciones end-to-end, desde APIs escalables hasta interfaces modernas y optimizadas para el usuario.",
    technologies: ["React", "Next.js", "Django", "PostgreSQL"],
  },
  {
    icon: <FiSmartphone className="w-8 h-8" />,
    title: "Aplicaciones Móviles",
    description:
      "Apps híbridas y nativas para iOS y Android que ofrecen experiencias rápidas, seguras y atractivas.",
    technologies: ["React Native", "Flutter"],
  },
  {
    icon: <FiZap className="w-8 h-8" />,
    title: "Optimización & Performance",
    description:
      "Mejoro la velocidad y estabilidad de aplicaciones existentes, elevando métricas clave como Core Web Vitals.",
    technologies: ["Vite", "Lighthouse", "Core Web Vitals"],
  },
  {
    icon: <FaUserSlash className="w-8 h-8" />,
    title: "Consultoría Técnica",
    description:
      "Guío equipos y proyectos en decisiones arquitectónicas, revisión de código y elección de la mejor estrategia tecnológica.",
    technologies: ["Architecture", "Code Review", "Tech Strategy"],
  },
];
 */
