import { motion } from "framer-motion";
import React from "react";

interface LogoNameProps {
  inicial: string;
  name: string;
  textsize: string;
}

const LogoName: React.FC<LogoNameProps> = ({ inicial, name, textsize }) => {
  return (
    <motion.a
      href="#hero"
      className="cursor-pointer z-40 relative"
      aria-label="Homepage"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        className={`${textsize} font-bold tracking-wide flex items-center relative group`}
      >
        {/* Contenedor principal con efecto de resplandor */}
        <div className="relative flex items-center">
          {/* Resplandor de fondo sutil */}
          <div
            className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
            style={{
              background:
                "linear-gradient(45deg, rgba(0, 183, 255, 0.1), rgba(189, 0, 255, 0.1))",
            }}
          />

          {/* Texto principal */}
          <span className="relative z-10 flex items-baseline">
            {/* Inicial con gradiente y efectos */}
            <h1
              className="relative rel"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-accentcolor) 0%, var(--color-neonPurple) 50%, var(--color-neonCyan) 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 8px rgba(0, 183, 255, 0.3))",
              }}
            >
              {inicial}

              {/* Brillo superior en la inicial */}
              <div
                className="absolute top-0 left-0 w-full h-1/2 rounded-t"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
                  pointerEvents: "none",
                }}
              />
            </h1>

            {/* Nombre con estilo complementario */}
            <h1
              className="relative ml-1 text-textlight font-semibold"
              style={{
                textShadow: `
                0 0 10px rgba(226, 232, 240, 0.15),
                1px 1px 2px rgba(0, 0, 0, 0.8)
              `,
                letterSpacing: "0.02em",
              }}
            >
              {name}

              {/* Sutil línea decorativa debajo del nombre */}
              <div
                className="absolute -bottom-1 left-0 h-px opacity-60 w-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, var(--color-textmuted) 20%, var(--color-textmuted) 80%, transparent 100%)",
                }}
              />
            </h1>
          </span>

          {/* Separador elegante */}
          <div className="flex items-center ml-3">
            {/* Línea conectora */}
            <div
              className="w-4 h-px"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-accentcolor), transparent)",
              }}
            />

            {/* Punto decorativo mejorado */}
            <div className="relative">
              {/* Punto principal */}
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, var(--color-neonCyan) 0%, var(--color-accentcolor) 100%)",
                  boxShadow: `
                  0 0 8px rgba(0, 255, 255, 0.4),
                  0 0 4px rgba(0, 183, 255, 0.6),
                  inset 0 1px 0 rgba(255, 255, 255, 0.3)
                `,
                }}
              />

              {/* Anillo exterior sutil */}
              <div className="absolute -inset-1 rounded-full border opacity-40 border-neonCyan" />
            </div>
          </div>
        </div>

        {/* Badge de desarrollador (opcional) */}
        <div
          className="ml-4 px-2 py-1 rounded text-xs font-medium opacity-75 hidden md:block text-accentcolor 
             bg-accentcolor/10 border border-accentcolor/20 text-[0.6em] tracking-[0.05em]"
        >
          DEV
        </div>

        {/* Elementos decorativos de código */}
        <div className="absolute -top-1 -right-1 text-xs opacity-20 font-mono hidden lg:block">
          <span className="text-accentcolor">&lt;/&gt;</span>
        </div>

        <div className="absolute -bottom-1 -left-1 text-xs opacity-20 font-mono hidden lg:block">
          <span className="text-neonPurple">{}</span>
        </div>
      </div>
    </motion.a>
  );
};

export default LogoName;
