import { motion, type Variants } from "framer-motion";
import skills from "../data/skills";
import { content } from "../data/content";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textVariant : Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const TechnologiesSection = () => {
  return (
    <section id="technologies" className="text-white py-20">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col space-y-6 mb-12"
      >
        <motion.h2
          variants={textVariant}
          className="uppercase text-sm tracking-[0.3em] text-[var(--color-accentcolor)] font-semibold"
        >
          {content.about.expertise_title}
        </motion.h2>

        <motion.h1
          variants={textVariant}
          className="text-4xl md:text-5xl font-extrabold leading-snug"
        >
          {content.about.about_intro}
        </motion.h1>
      </motion.div>

      {/* Skills categorizados */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-12"
      >
        {skills.map(({ category, technologies }) => (
          <motion.div
            variants={textVariant}
            key={category}
            className="flex flex-col gap-4"
          >
            <h3 className="text-xl font-bold text-accentcolor">{category}</h3>
            <div className="flex flex-wrap gap-4">
              {technologies.map(({ name, icon }) => (
                <motion.div
                  variants={textVariant}
                  key={name}
                  className="group flex items-center gap-2 px-4 py-2 bg-primarylight border border-transparent hover:border-accentcolor rounded-lg transition-all"
                >
                  <span className="text-xl text-accentglow group-hover:scale-110 transition-transform">
                    {icon}
                  </span>
                  <span className="text-sm font-medium group-hover:text-accentcolor">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechnologiesSection;
