import type { ReactNode } from "react";
import Header from "./Header";
import BackToTopButton from "../components/BackToTopButton";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Header con navegación principal */}
      <Header />
      
      {/* Main content area */}
      <main 
        className="relative z-auto"
        role="main"
        aria-label="Contenido principal del portafolio"
      >
        {children}
      </main>
      
      {/* Back to Top Button - accessibility */}
      <BackToTopButton />
    </div>
  );
};

export default Layout;
