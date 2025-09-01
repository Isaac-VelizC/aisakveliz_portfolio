import { motion } from "framer-motion";
import { itemVariants } from "../../utils/AnimateVariantsUtils";
import ButtonComponent from "../../components/ButtonComponent";

type HeroButtonsProps = {
  linkWhatsApp: string;
};

const HeroButtons = ({ linkWhatsApp }: HeroButtonsProps) => {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col sm:flex-row gap-4 pt-4"
    >
      <ButtonComponent
        hrefUrl="#projects"
        name="Ver Proyectos"
        icon={
          <motion.svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </motion.svg>
        }
      />

      <motion.a
        whileHover={{
          scale: 1.05,
          borderColor: "#00ffff",
        }}
        whileTap={{ scale: 0.98 }}
        href={linkWhatsApp}
        aria-label="Trabajemos Juntos"
        className="group px-8 py-4 border-2 border-accentcolor/50 text-accentcolor rounded-xl font-semibold transition-all duration-300 hover:bg-accentcolor hover:text-white relative overflow-hidden backdrop-blur-sm"
      >
        <span className="relative z-10 flex items-center gap-2">
          Trabajemos Juntos
          <motion.svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            whileHover={{ rotate: 15 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </motion.svg>
        </span>
      </motion.a>
    </motion.div>
  );
};

export default HeroButtons;
