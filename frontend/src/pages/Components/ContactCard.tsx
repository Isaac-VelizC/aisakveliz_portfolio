import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaCopy,
  FaCheck,
  FaPaperPlane,
  FaGlobe,
} from "react-icons/fa";
import { cardVariants } from "../../utils/AnimateVariantsUtils";

type Props = {
    email: string;
    whatsapp: string;
    whatsapp_link: string;
};

const ContactCard = ({ email, whatsapp, whatsapp_link }: Props) => {
  const [copied, setCopied] = useState(false);
  const [copiedText, setCopiedText] = useState("");

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: email,
      action: () => copyToClipboard(email),
      actionText: "Copiar",
      description: "Respuesta en 24 horas",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: whatsapp,
      action: () => window.open(whatsapp_link, "_blank"),
      actionText: "Chatear",
      description: "Respuesta inmediata",
    },
  ];

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setCopiedText(text);
        setTimeout(() => {
          setCopied(false);
          setCopiedText("");
        }, 2000);
      })
      .catch((err) => console.error("Error al copiar al portapapeles: ", err));
  }, []);

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-accentcolor mb-6 flex items-center gap-2">
        <FaGlobe className="w-5 h-5" />
        Formas de Contacto
      </h3>

      {contactMethods.map((method) => (
        <motion.div
          key={method.title}
          variants={cardVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          className="group relative p-6 bg-gradient-to-br from-primarylight/50 to-secondarydark/30 backdrop-blur-sm border border-accentcolor/10 rounded-2xl hover:border-accentcolor/40 transition-all duration-300"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-accentcolor/5 to-neonPurple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

          <div className="relative">
            <div className="flex items-start gap-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-3 rounded-xl bg-accentcolor/20 text-accentcolor group-hover:bg-accentcolor group-hover:text-white transition-all duration-300"
              >
                <method.icon className="w-5 h-5" />
              </motion.div>

              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-textlight group-hover:text-accentcolor transition-colors duration-300">
                  {method.title}
                </h4>
                <p className="text-textmuted text-sm mb-2 truncate">
                  {method.value}
                </p>
                <p className="text-xs text-textmuted/70">
                  {method.description}
                </p>
              </div>
            </div>

            {method.action && (
              <motion.button
                onClick={method.action}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 w-full px-4 py-2 bg-accentcolor/10 text-accentcolor rounded-lg font-medium hover:bg-accentcolor hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                {method.title === "Email" ? (
                  copied && copiedText === method.value ? (
                    <>
                      <FaCheck className="w-4 h-4" />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <FaCopy className="w-4 h-4" />
                      {method.actionText}
                    </>
                  )
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4" />
                    {method.actionText}
                  </>
                )}
              </motion.button>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactCard;
