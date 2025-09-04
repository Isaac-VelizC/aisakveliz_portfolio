import { AnimatePresence, motion, type Variants } from "framer-motion";
import React from "react";
import type { ProjectsInterface } from "../../interface/Project";
import { getStatusColor, getStatusText } from "../../utils/funtionsUtils";
import ImgNone from "../../assets/project-none.png";

type Props = {
  selectedProject: ProjectsInterface | null;
  setSelectedProject: (project: ProjectsInterface | null) => void;
};

const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateY: -15,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    rotateY: 15,
    transition: {
      duration: 0.3,
    },
  },
};

const ModalProject: React.FC<Props> = ({
  selectedProject,
  setSelectedProject,
}) => {
  return (
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-primarylight to-secondarydark border border-accentcolor/30 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-textlight mb-2">
                  {selectedProject.title}
                </h3>
                <span
                  className={`text-sm px-3 py-1 rounded-full font-medium ${getStatusColor(
                    selectedProject.status
                  )}`}
                >
                  {getStatusText(selectedProject.status)}
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProject(null)}
                className="px-2 py-1 rounded-full bg-accentcolor/20 text-accentcolor hover:bg-accentcolor hover:text-white transition-all duration-300"
              >
                ✕
              </motion.button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <img
                  src={selectedProject.image || ImgNone}
                  alt={selectedProject.title}
                  className="w-full h-36 lg:h-56 object-cover rounded-xl"
                />

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-accentcolor">
                    Descripción
                  </h4>
                  <p className="text-textmuted leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-accentcolor mb-3">
                    Tecnologías
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accentcolor/10 text-accentcolor rounded-full text-sm border border-accentcolor/20"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-accentcolor mb-3">
                    Estadísticas
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.stars > 0 && (
                      <div className="flex justify-between">
                        <span className="text-textmuted">Stars</span>
                        <span className="text-textlight">
                          {selectedProject.stars}
                        </span>
                      </div>
                    )}
                    {selectedProject.views > 0 && (
                      <div className="flex justify-between">
                        <span className="text-textmuted">Vistas</span>
                        <span className="text-textlight">
                          {selectedProject.views}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-textmuted">Fecha</span>
                      <span className="text-textlight">
                        {selectedProject.date}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  {selectedProject.demo_url && (
                    <motion.a
                      href={selectedProject.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 py-3 px-6 bg-accentcolor text-white rounded-xl font-semibold text-center hover:bg-neonCyan transition-colors duration-300"
                    >
                      Ver Demo
                    </motion.a>
                  )}
                  {selectedProject.repository_url && (
                    <motion.a
                      href={selectedProject.repository_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 py-3 px-6 border-2 border-accentcolor text-accentcolor rounded-xl font-semibold text-center hover:bg-accentcolor hover:text-white transition-all duration-300"
                    >
                      Ver Código
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalProject;
