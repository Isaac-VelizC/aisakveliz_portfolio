const SectionFallback = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(18, 24, 38, 0.9) 100%)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner animado con colores del tema */}
        <div className="relative">
          <div
            className="w-12 h-12 border-4 rounded-full animate-spin"
            style={{
              borderColor: "var(--color-primarylight)",
              borderTopColor: "var(--color-accentcolor)",
            }}
          ></div>
          <div
            className="absolute inset-0 w-12 h-12 border-4 border-transparent rounded-full animate-spin"
            style={{
              borderLeftColor: "var(--color-neonPurple)",
              animationDirection: "reverse",
              animationDuration: "1.5s",
            }}
          ></div>
        </div>

        {/* Texto con animación usando colores del tema */}
        <div className="text-center space-y-2">
          <p
            className="font-medium animate-pulse"
            style={{ color: "var(--color-textlight)" }}
          >
            Cargando contenido...
          </p>
          <p
            className="text-sm animate-pulse"
            style={{
              color: "var(--color-textmuted)",
              animationDelay: "0.5s",
            }}
          >
            Preparando algo increíble para ti ✨
          </p>
        </div>

        {/* Progress indicator con gradiente del tema */}
        <div
          className="w-48 h-1 rounded-full overflow-hidden"
          style={{ backgroundColor: "var(--color-primarylight)" }}
        >
          <div
            className="h-full rounded-full animate-pulse"
            style={{
              width: "60%",
              background:
                "linear-gradient(90deg, var(--color-accentcolor), var(--color-neonPurple))",
              animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SectionFallback;
