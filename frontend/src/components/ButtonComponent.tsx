import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  hrefUrl: string;
  name: string;
  icon?: ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
};

const sizeClasses = {
  small: "px-4 py-2 text-sm",
  medium: "px-8 py-4 text-base",
  large: "px-12 py-6 text-lg",
};

const ButtonComponent = ({ hrefUrl, name, icon, className = "", size = "medium" }: Props) => {
  return (
    <motion.a
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 25px rgba(0,183,255,0.4)",
      }}
      whileTap={{ scale: 0.98 }}
      href={hrefUrl}
      aria-label={name}
      className={`group relative bg-gradient-to-r from-accentcolor to-neonCyan rounded-xl font-semibold text-white transition-all duration-300 overflow-hidden ${sizeClasses[size]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {name}
        {icon}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-neonCyan to-neonPurple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.a>
  );
};

export default ButtonComponent;
