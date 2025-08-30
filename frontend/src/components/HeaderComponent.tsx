import { motion } from "framer-motion";
import { headerVariants } from "../utils/AnimateVariantsUtils";

type Props = {
  title: string;
};

const HeaderComponent: React.FC<Props> = ({ title }) => {
  return (
    <motion.div
      variants={headerVariants}
      className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-accentcolor/30 bg-accentcolor/5 backdrop-blur-sm mb-8"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="w-3 h-3 border-2 border-accentcolor rounded-full border-t-transparent"
      />
      <span className="text-sm font-medium text-accentcolor uppercase tracking-widest">
        {title}
      </span>
    </motion.div>
  );
};

export default HeaderComponent;
