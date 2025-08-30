import { motion, type Variants } from "framer-motion";
import { containerVariants } from "../../utils/AnimateVariantsUtils";
import { useEffect, useState } from "react";
import type { CategoryInterface } from "../../interface/Category";
import { InfoService } from "../../api/fetchService";
import CardGridSkill from "./CardGridSkill";

type Props = {
  inView: boolean;
};

const categoryVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const TechnologyGrid = ({ inView }: Props) => {
  const [data, setData] = useState<CategoryInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fetch data
  useEffect(() => {
    const fetchCategoryInfo = async () => {
      try {
        const data = await InfoService.getTechnology();
        setData(data);
      } catch (error) {
        console.error("Error fetching category info:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategoryInfo();
  }, []); // arreglo vacío para evitar multiples ejecucione

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="space-y-16"
    >
      {data &&
        data.map(({ name, technologies }, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            variants={categoryVariants}
            className="relative"
          >
            {/* Category Header */}
            <motion.div
              className="flex items-center gap-4 mb-8"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: 60 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="h-px bg-gradient-to-r from-accentcolor to-transparent"
              />
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accentcolor to-neonCyan">
                {name}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accentcolor/20 to-transparent" />
            </motion.div>

            {/* Technologies Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {technologies.map((item, techIndex) => (
                <CardGridSkill
                  key={techIndex}
                  catName={name}
                  techIndex={techIndex}
                  catIndex={categoryIndex}
                  skill={item}
                  inView={inView}
                />
              ))}
            </div>
          </motion.div>
        ))}
    </motion.div>
  );
};

export default TechnologyGrid;
