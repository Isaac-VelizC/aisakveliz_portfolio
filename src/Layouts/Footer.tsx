const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-400 py-10 mt-16 border-t border-neutral-700">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold text-white">AIsak Veliz</span>. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-500">Desarrollado con pasión y mucho café ☕</p>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://github.com/aisakveliz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="mailto:aisakveliz@gmail.com"
            className="hover:text-white transition-colors duration-300"
          >
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
