import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useState } from "react";
// import { InfoService } from "../../api/fetchService";
import type { ProjectsInterface } from "../../interface/Project";
import {
  FaExternalLinkAlt,
  FaCode,
  FaStar,
  FaEye,
  FaCalendarAlt,
} from "react-icons/fa";
import PreviewOrvelayProject from "../../components/PreviewOrvelayProject";
import { getStatusColor, getStatusText } from "../../utils/funtionsUtils";
import ModalProject from "./ModalProject";
import { projects } from "../../assets/informacion.json";

type Props = {
  isInView: boolean;
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    rotateX: 15,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const GridProjects = ({ isInView }: Props) => {
  const [filter, setFilter] = useState("all");
  // const [projects, setProjects] = useState<ProjectsInterface[]>([]);
  const [selectedProject, setSelectedProject] =
    useState<ProjectsInterface | null>(null);

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     const data = await InfoService.getProjects();
  //     setProjects(data);
  //   };
  //   fetchProjects();
  // }, []);

  // Obtener categorías únicas para filtros
  const categories = [
    "all",
    ...new Set(
      projects.flatMap((p) => p.technologies.map((tech) => tech.name))
    ),
  ];

  // Filtrar proyectos
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) =>
          project.technologies.some((tech) => tech.name === filter)
        );

  return (
    <>
      {/** Projects Filter */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.slice(0, 6).map((category) => (
          <motion.button
            key={category}
            onClick={() => setFilter(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              filter === category
                ? "bg-accentcolor text-white shadow-blue-md"
                : "bg-primarylight/50 text-textmuted border border-accentcolor/20 hover:border-accentcolor/50 hover:text-accentcolor"
            }`}
          >
            {category === "all" ? "Todos" : category}
          </motion.button>
        ))}
      </motion.div>

      {/** Projects Grid */}
      <motion.div layout className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="group relative bg-gradient-to-br from-primarylight/80 to-secondarydark/50 backdrop-blur-sm border border-accentcolor/10 rounded-2xl overflow-hidden hover:border-accentcolor/40 transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <motion.div
                  initial={{ scale: 0, rotate: -12 }}
                  animate={{ scale: 1, rotate: -12 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full z-10"
                >
                  ⭐ Destacado
                </motion.div>
              )}

              {/* Image/Preview */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accentcolor/10 to-neonPurple/10">
                <motion.img
                  src={
                    project.image
                      ? project.image
                      : "https://i.pinimg.com/736x/e4/3f/cd/e43fcd1cd8bdb6e6be2b017249da54f1.jpg"
                  }
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primarydark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Preview Overlay */}
                <PreviewOrvelayProject />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-textlight group-hover:text-accentcolor transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {getStatusText(project.status)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-textmuted text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + techIndex * 0.05,
                      }}
                      className="text-xs px-3 py-1 bg-accentcolor/10 text-accentcolor rounded-full border border-accentcolor/20 hover:border-accentcolor/50 transition-colors duration-300"
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs px-3 py-1 text-textmuted">
                      +{project.technologies.length - 4} más
                    </span>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-accentcolor/10">
                  <div className="flex items-center gap-4 text-xs text-textmuted">
                    {project.stars > 0 && (
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400" />
                        <span>{project.stars}</span>
                      </div>
                    )}
                    {project.views > 0 && (
                      <div className="flex items-center gap-1">
                        <FaEye className="text-accentcolor" />
                        <span>{project.views}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="text-textmuted" />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.demo_url && (
                      <motion.a
                        href={project.demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-accentcolor/20 text-accentcolor hover:bg-accentcolor hover:text-white transition-all duration-300"
                        title="Ver demo"
                      >
                        <FaExternalLinkAlt className="w-3 h-3" />
                      </motion.a>
                    )}
                    {project.repository_url && (
                      <motion.a
                        href={project.repository_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-accentcolor/20 text-accentcolor hover:bg-accentcolor hover:text-white transition-all duration-300"
                        title="Ver código"
                      >
                        <FaCode className="w-3 h-3" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-accentcolor/0 via-accentcolor/5 to-neonPurple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Modal */}
      <ModalProject
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
    </>
  );
};

export default GridProjects;
