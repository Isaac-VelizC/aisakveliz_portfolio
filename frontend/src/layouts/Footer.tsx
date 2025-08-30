const Footer = () => {
  return (
    <footer>
      {/* Línea decorativa superior */}
      <div className="footer_line" />
      <div className="container mx-auto px-6">
        {/* Contenido principal */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
          {/* Información del desarrollador */}
          <div className="text-center lg:text-left">
            <div className="mb-3">
              <h1
                className="text-2xl font-bold tracking-wide"
                style={{
                  background:
                    "linear-gradient(45deg, var(--color-accentcolor), var(--color-neonPurple))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AIsakVeliz
              </h1>
            </div>

            <p className="text-sm mb-2 text-textlight">
              © {new Date().getFullYear()} Todos los derechos reservados.
            </p>

            <p className="text-xs flex items-center justify-center text-textmuted lg:justify-start gap-2">
              Desarrollado con
              <span
                className="px-2 py-1 rounded text-xs font-medium text-white"
                style={{
                  background:
                    "linear-gradient(45deg, var(--color-accentcolor), var(--color-neonPurple))",
                }}
              >
                React
              </span>
              y mucho café ☕
            </p>
          </div>

          {/* Enlaces sociales y contacto */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Enlaces principales */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/Isaac-VelizC"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-textlight border-primarylight bg-transparent gap-2 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium border"
                onMouseEnter={(e) => {
                  const target = e.target as HTMLAnchorElement;
                  target.style.borderColor = "var(--color-accentcolor)";
                  target.style.color = "var(--color-accentcolor)";
                  target.style.boxShadow = "0 0 15px rgba(0, 183, 255, 0.3)";
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLAnchorElement;
                  target.style.borderColor = "var(--color-primarylight)";
                  target.style.color = "var(--color-textlight)";
                  target.style.boxShadow = "none";
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>

              <a
                href="mailto:aisakvelizdc@gmail.com"
                className="flex items-center text-white border-none gap-2 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium"
                style={{
                  background:
                    "linear-gradient(45deg, var(--color-accentcolor), var(--color-neonPurple))",
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLAnchorElement;
                  target.style.transform = "translateY(-2px)";
                  target.style.boxShadow = "0 8px 25px rgba(0, 183, 255, 0.4)";
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLAnchorElement;
                  target.style.transform = "translateY(0)";
                  target.style.boxShadow = "none";
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                Contacto
              </a>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="footer_separador"/>

        {/* Información adicional */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Stack tecnológico */}
          <div className="flex items-center gap-3 text-xs">
            <span className="text-textmuted">Built with:</span>
            {["React", "Tailwind", "Framer Motion"].map((tech, index) => (
              <span
                key={tech}
                className={`px-2 py-1 rounded text-xs bg-primarylight text-textmuted border border-solid ${
                  index === 0
                    ? "border-accentcolor"
                    : index === 1
                    ? "border-neonPurple"
                    : "border-neonPink"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Versión y ubicación */}
          <div className="flex items-center gap-4 text-xs text-textmuted">
            <span>v2.0.0</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Potosí, Bolivia
            </span>
          </div>
        </div>
      </div>
      {/* Efecto de brillo sutil en el fondo */}
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-px opacity-30"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-neonCyan), transparent)",
          filter: "blur(1px)",
        }}
      />
    </footer>
  );
};

export default Footer;
