import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ContactAnimateBackground from "./Components/ContactAnimateBackground";
import ContactCTA from "./Components/ContactCTA";
import {
  cardVariants,
  containerVariants,
  itemVariants,
} from "../utils/AnimateVariantsUtils";
import { FaClock, FaRocket } from "react-icons/fa";
import { contentText } from "../utils/dataUtils";
import ContactCard from "./Components/ContactCard";
import ContactForm from "./Components/ContactForm";

const workingHours = [
  { day: "Lunes - Viernes", hours: "9:00 AM - 6:00 PM" },
  { day: "Sábado", hours: "10:00 AM - 2:00 PM" },
  { day: "Domingo", hours: "Disponible por emergencias" },
];

const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="contactMe"
      className="relative min-h-screen py-20 overflow-hidden z-0"
    >
      {/* Background Elements */}
      <ContactAnimateBackground sectionRef={sectionRef} />

      <div className="container mx-auto px-2 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-accentcolor/30 bg-accentcolor/5 backdrop-blur-sm mb-8"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity },
              }}
              className="text-accentcolor"
            >
              <FaRocket className="w-4 h-4" />
            </motion.div>
            <span className="text-sm font-medium text-accentcolor uppercase tracking-widest">
              {contentText.contact.title}
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-textlight">Hablemos y </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentcolor via-neonCyan to-neonPurple">
              Creemos Algo
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPink to-accentcolor">
              Extraordinario
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-textmuted max-w-3xl mx-auto leading-relaxed"
          >
            {contentText.contact.contact_message}
          </motion.p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-1 space-y-8"
          >
            {/* Contact Cards */}
            <ContactCard
              email={contentText.contact.emailPlaceholder}
              whatsapp={contentText.contact.whatsapp}
              whatsapp_link={contentText.contact.whatsapp_link}
            />
            {/* Working Hours */}
            <motion.div
              variants={cardVariants}
              className="p-6 bg-gradient-to-br from-primarylight/30 to-secondarydark/20 backdrop-blur-sm border border-accentcolor/10 rounded-2xl"
            >
              <h3 className="text-lg font-semibold text-accentcolor mb-4 flex items-center gap-2">
                <FaClock className="w-5 h-5" />
                Horario de Trabajo
              </h3>
              <div className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="text-textmuted">{schedule.day}</span>
                    <span className="text-textlight font-medium">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          {/* Contact Form */}
          <ContactForm isInView={isInView}/>
        </div>
        {/* Footer CTA */}
        <ContactCTA />
      </div>
    </section>
  );
};

export default ContactSection;
