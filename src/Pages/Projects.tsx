import { motion } from "framer-motion";
import { content } from "../data/content";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { projects } from "../data/projects";

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-primarydark text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase text-accentcolor tracking-widest text-sm font-medium mb-2"
        >
          {content.portfolio.title}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold mb-12 leading-snug"
        >
          {content.portfolio.description}
        </motion.h2>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-secondarydark rounded-xl p-6 shadow-xl hover:shadow-neon transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2 text-white">
                {project.title}
              </h3>

              <p className="text-white/80 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4 text-sm">
                {project.frameworks.map((fw, index) => (
                  <span
                    key={index}
                    className="bg-accentcolor/10 text-accentcolor px-2 py-1 rounded-md"
                  >
                    {fw}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-white/50">{project.date}</span>
                <div className="flex gap-4 text-accentcolor text-lg">
                  {project.preview && (
                    <a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Ver demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  {project.file_url && (
                    <a
                      href={project.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Ver código"
                    >
                      <FaCode />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
