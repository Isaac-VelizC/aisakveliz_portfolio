import { motion, type Variants } from "framer-motion";
import React, { useRef, useState } from "react";

type Props = {
  imageUrl?: string;
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const ImageSectionAbout: React.FC<Props> = ({ imageUrl }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  return (
    <motion.div variants={imageVariants} className="relative group">
      <div className="relative">
        {/* Glow effect behind image */}
        <div className="absolute inset-0 bg-gradient-to-br from-accentcolor/20 via-neonCyan/20 to-neonPurple/20 rounded-3xl blur-2xl scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Main image container */}
        <div className="relative bg-gradient-to-br from-accentcolor/10 to-neonPurple/10 p-1 rounded-3xl backdrop-blur-sm border border-accentcolor/20">
          <div className="relative overflow-hidden rounded-3xl">
            {!isImageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-primarylight to-secondarydark animate-pulse rounded-3xl" />
            )}
            <img
              ref={imageRef}
              src={
                imageUrl ??
                "https://i.pinimg.com/736x/ff/b6/95/ffb69593f4a7c301c0c0b1655f22077f.jpg"
              }
              alt="Foto de perfil"
              className="w-full h-auto object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
              onLoad={() => setIsImageLoaded(true)}
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primarydark/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity },
          }}
          className="absolute -top-4 -right-4 w-20 h-20 border-2 border-accentcolor/30 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            y: [0, -10, 0],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity },
          }}
          className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-neonPink/30 rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default ImageSectionAbout;
