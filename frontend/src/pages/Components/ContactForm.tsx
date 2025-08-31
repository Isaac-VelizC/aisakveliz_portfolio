import { FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import {
  cardVariants,
  containerVariants,
  itemVariants,
} from "../../utils/AnimateVariantsUtils";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { contentText } from "../../utils/dataUtils";
import { useForm } from "@formspree/react";
// import { InfoService } from "../../api/fetchService";

type Props = {
  isInView: boolean;
};

const statusVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.9,
    transition: {
      duration: 0.2,
    },
  },
};

const ContactForm = ({ isInView }: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     const res = await InfoService.postContactMessage(formData);
  //     console.log("Mensaje guardado:", res.data);

  //     setFormData({ name: "", email: "", message: "" });
  //   } catch (err) {
  //     console.error("Error al enviar mensaje:", err);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const [state, handleSubmit] = useForm("xjkewojn");

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="lg:col-span-2"
    >
      <motion.div
        variants={cardVariants}
        className="p-8 bg-gradient-to-br from-primarylight/50 to-secondarydark/30 backdrop-blur-sm border border-accentcolor/20 rounded-3xl"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <h3 className="text-2xl font-bold text-textlight mb-2">
            Envíame un Mensaje
          </h3>
          <p className="text-textmuted">
            ¿Tienes una idea increíble? ¡Me encantaría escucharla!
          </p>
        </motion.div>

        {/* Mensajes de estado con animación */}
        <motion.div
          variants={statusVariants}
          initial="hidden"
          animate={status !== "idle" ? "visible" : "hidden"}
          exit="exit"
          className="relative"
        >
          {state.succeeded && (
            <motion.p
              className="text-green-600 text-sm mt-2 flex items-center gap-2 bg-green-50 p-3 rounded-lg border border-green-200"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
              >
                ✅
              </motion.span>
              Mensaje enviado con éxito, te contactaremos pronto.
            </motion.p>
          )}
          {state.errors && (
            <motion.p
              className="text-red-600 text-sm mt-2 flex items-center gap-2 bg-red-50 p-3 rounded-lg border border-red-200"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
              >
                ❌
              </motion.span>
              Hubo un problema, inténtalo nuevamente.
            </motion.p>
          )}
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-textlight mb-2">
                Nombre *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-primarylight/50 border border-accentcolor/20 rounded-xl text-textlight placeholder-textmuted focus:outline-none focus:border-accentcolor focus:ring-2 focus:ring-accentcolor/20 transition-all duration-300"
                placeholder="Tu nombre completo"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-textlight mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-primarylight/50 border border-accentcolor/20 rounded-xl text-textlight placeholder-textmuted focus:outline-none focus:border-accentcolor focus:ring-2 focus:ring-accentcolor/20 transition-all duration-300"
                placeholder="tu@email.com"
              />
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-textlight mb-2">
              Mensaje *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-primarylight/50 border border-accentcolor/20 rounded-xl text-textlight placeholder-textmuted focus:outline-none focus:border-accentcolor focus:ring-2 focus:ring-accentcolor/20 transition-all duration-300 resize-none"
              placeholder="Cuéntame sobre tu proyecto, idea o cualquier cosa en la que pueda ayudarte..."
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col lg:flex-row gap-4"
          >
            <motion.button
              type="submit"
              disabled={state.submitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-8 py-4 bg-gradient-to-r from-accentcolor to-neonCyan text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-blue-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {state.submitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Enviando...
                </>
              ) : (
                <>
                  <FaPaperPlane className="w-5 h-5" />
                  Enviar Mensaje
                </>
              )}
            </motion.button>

            <motion.a
              href={contentText.contact.whatsapp_link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border-2 border-accentcolor text-accentcolor rounded-xl font-semibold hover:bg-accentcolor hover:text-white transition-all duration-300 flex items-center gap-3"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp
            </motion.a>
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
