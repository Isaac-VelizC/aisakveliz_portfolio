import { motion } from "framer-motion";
import { CopyIcon } from "./../assets/icons";
import socials from "../data/socials";
import { useCallback, useState } from "react";
import { content } from "../data/content";

const email = content.contact.emailPlaceholder;
const subject = "Consulta sobre servicios";
const body = "Hola Isak, vi tu portafolio y me gustaría conversar sobre...";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [copiedText, setCopiedText] = useState("");
  const copyToClipboard = useCallback((text: string): void => {
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
      .catch((err) => console.error("Error copying to clipboard: ", err));
  }, []);
  return (
    <section id="contactMe" className="py-24 md:py-32 bg-transparent text-white">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="uppercase text-accentcolor font-semibold tracking-widest mb-2">
            {content.contact.title}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 leading-tight text-textlight">
            {content.contact.contact_message}
          </h2>
        </motion.div>

        {/* Contacto */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Datos */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="uppercase text-sm font-semibold tracking-widest mb-4 text-textmuted">
              {content.contact.contact_datas}
            </h3>
            <div className="space-y-4 text-white/80 text-base font-light">
              <div className="flex items-center gap-2">
                <p>{email}</p>
                <CopyIcon onClick={() => copyToClipboard(email)} />
                {copied && copiedText === email && (
                  <span className="text-green-400 text-sm">
                    {content.contact.copied_email_message}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <p>{content.contact.numberPlaceholder}</p>
                <CopyIcon onClick={() => copyToClipboard("+591 69625120")} />
                {copied && copiedText === "+591 69625120" && (
                  <span className="text-green-400 text-sm">
                    {content.contact.copied_num_message}
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Redes */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="uppercase text-sm font-semibold tracking-widest mb-4 text-textmuted">
              Redes Sociales
            </h3>
            <ul className="flex flex-wrap gap-6 text-2xl text-accentcolor">
              {socials.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="hover:text-white focus:outline-none focus:ring-2 focus:ring-accentcolor rounded transition-colors duration-300"
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Botón de contacto */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href={`mailto:${email}?subject=${encodeURIComponent(
                subject
              )}&body=${encodeURIComponent(body)}`}
              className="w-full text-center px-6 py-4 rounded-lg uppercase font-semibold tracking-widest transition duration-300
              text-accentcolor bg-accentcolor/20 hover:bg-accentcolor
              hover:text-white shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-accentcolor/50"
            >
              {content.contact.contact_button_text}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
