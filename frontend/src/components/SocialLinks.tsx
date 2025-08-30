import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../utils/AnimateVariantsUtils";
import type { SocialNetworkInterface } from "../interface/Contact";
import { useEffect, useState } from "react";
import { InfoService } from "../api/fetchService";
import { iconMap } from "../utils/iconMap";

const SocialLinks = () => {
  const [socialLinks, setSocialLinks] = useState<SocialNetworkInterface[]>([]);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      const data = await InfoService.getSocialLinks();
      setSocialLinks(data.results);
    };

    fetchSocialLinks();
  }, []);

  return (
    <div>
        {/* Social Links - Redesigned */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block"
      >
        <div className="flex flex-col gap-6">
          {socialLinks.map((network, index) => (
            <motion.a
              key={index}
              href={network.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={network.name}
              className="w-12 h-12 rounded-full border border-accentcolor/30 bg-primarylight/50 backdrop-blur-sm flex items-center justify-center text-accentcolor hover:bg-accentcolor hover:text-primarydark transition-all duration-300 group"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 20px rgba(0,183,255,0.4)"
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            >
              <span className="text-sm font-medium">
                {iconMap[network.icon] || network.name.charAt(0).toUpperCase()}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Mobile Social Links */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 lg:hidden"
      >
        {socialLinks.map((network, index) => (
          <motion.a
            key={index}
            variants={itemVariants}
            href={network.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={network.name}
            className="w-10 h-10 rounded-full border border-accentcolor/30 bg-primarylight/50 backdrop-blur-sm flex items-center justify-center text-accentcolor hover:bg-accentcolor hover:text-primarydark transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-xs font-medium">
              {network.name.charAt(0).toUpperCase()}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  )
}

export default SocialLinks;