import { motion } from "framer-motion";
import socials from "../data/socials";
import { content } from "../data/content";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};
const HeroSection = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center md:flex-row md:justify-between md:items-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="md:mt-20 mb-10 md:mb-0 md:mr-auto md:pr-8 max-w-[800px]"
      >
        <motion.div
          variants={itemVariants}
          className="flex justify-start items-center gap-6 text-[1rem] font-normal text-accentcolor uppercase mt-0 mb-3"
        >
          <div className="w-8 h-[1px] bg-accentcolor" />
          <p>{"hello_world"}</p>
        </motion.div>
        <motion.h1 className="leading-tight text-[32px] md:text-[2rem] lg:text-[2.4rem] xl:text-[3.4rem] max-w-[800px]">
          {content.hero.greeting},{" "}
          <span className="text-accentcolor font-semibold">
            Ingeniero en Sistemas
          </span>{" "}
          y{" "}
          <span className="text-accentcolor font-semibold">
            {content.hero.role}
          </span>
          .<br className="hidden sm:inline" />
          Construyo soluciones <span className="italic">eficientes</span> y{" "}
          <span className="italic">centradas en el usuario</span>.
        </motion.h1>
        <div className="mt-8">
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-accentcolor text-white rounded-lg font-semibold shadow-lg"
            href="#projects"
            role="link"
            aria-label={content.hero.view_projects}
          >
            {content.hero.view_projects}
          </motion.a>
        </div>
      </motion.div>
      <ul
        aria-label="Redes sociales"
        className="flex sm:flex-row sm:absolute sm:right-12 lg:right-4 sm:top-[5%] sm:transform sm:-translate-y-1/2 sm:rotate-[-90deg] sm:origin-top-right z-10 list-none text-[0.6rem] font-normal text-gray-500 uppercase tracking-wider items-center sm:space-y-0 sm:space-x-8 gap-6 sm:gap-0"
      >
        {socials.map((network, index) => (
          <motion.li
            key={network.id}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <motion.a
              href={network.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={network.name}
              whileHover={{ scale: 1.2, color: "#ff00c3" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {network.name}
            </motion.a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default HeroSection;
