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
  FaWhatsapp,
  FaGithub
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
  faGithub: <FaGithub />,
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
