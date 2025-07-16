import { FaReact, FaLaravel, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiDjango, SiMysql, SiPostgresql, SiFigma, SiFlutter, SiSqlite } from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Django", icon: <SiDjango /> },
      { name: "Laravel", icon: <FaLaravel /> },
      // { name: "Supabase", icon: <SiSupabase /> },
      // { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    category: "Mobile & Cross-platform",
    technologies: [
      { name: "Flutter", icon: <SiFlutter /> },
    ],
  },
  {
    category: "Bases de datos",
    technologies: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "SQLite", icon: <SiSqlite /> },
    ],
  },
  {
    category: "Herramientas",
    technologies: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Figma", icon: <SiFigma /> },
      // { name: "Docker", icon: <SiDocker /> },
    ],
  },
];


export default skills;