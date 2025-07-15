import { motion } from "framer-motion";
import { content } from "../data/content";
import curriculum from "./../assets/pdf/Isaac Veliz Canaza - Curriculum.pdf";

const AboutSection = () => {

  const downloadDocument = () => {
    const link = document.createElement("a");
    link.href = curriculum;
    link.download = "IsaacVeliz_hoja-de-vida.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Limpiar el DOM
  };

  return (
    <section id="aboutMe" className="relative h-auto flex flex-col pt-[5rem]">
      <div className="flex flex-col md:items-center md:flex-row items-start gap-12 md:gap-20 relative z-10">
        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-[36%] w-full"
        >
          <img
            src="https://i.pinimg.com/736x/ff/b6/95/ffb69593f4a7c301c0c0b1655f22077f.jpg"
            alt="Foto de perfil"
            className="w-full h-auto object-cover rounded-3xl shadow-lg"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=" md:w-1/2 w-full text-textlight"
        >
          <p className="mb-8 text-base md:text-lg leading-relaxed text-justify">
            {content.about.content}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accentcolor/20 text-accentcolor hover:text-textlight hover:bg-accentcolor rounded-xl px-8 py-3 uppercase font-semibold tracking-wide transition duration-300"
            onClick={() => downloadDocument()}
          >
            {content.about.buttonDonwload}
          </motion.button>
        </motion.div>
      </div>

      {/* Título grande superpuesto */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute blur-xs top-2 md:top-9.5 left-6 text-accentcolor/60 md:left-120.5 text-[44px] md:text-[70px] tracking-widest font-serif uppercase z-10 pointer-events-none"
      >
        {content.about.title}
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-2 md:top-9 left-6 text-primarydark md:left-120 text-[44px] md:text-[70px] tracking-widest font-serif uppercase z-10 pointer-events-none"
      >
        {content.about.title}
      </motion.h2>
    </section>
  );
};

export default AboutSection;
