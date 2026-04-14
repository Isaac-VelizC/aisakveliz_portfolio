import { lazy, Suspense, memo } from "react";
import Layout from "./layouts/Layout";
import SEO from "./components/SEO";
import { webSiteStructuredData, personStructuredData } from "./utils/structuredData";
import SectionFallback from "./components/SectionFallback";

// Lazy loading granular para mejor rendimiento
const HeroSection = lazy(() => import("./pages/HeroSection"));
const AboutSection = lazy(() => import("./pages/AboutSection"));
const ServicesSection = lazy(() => import("./pages/ServiceSection"));
const TechnologiesSection = lazy(() => import("./pages/TechnologiesSection"));
const ProjectSection = lazy(() => import("./pages/ProjectSection"));
const ContactSection = lazy(() => import("./pages/ContactSection"));
const Footer = lazy(() => import("./layouts/Footer"));

// Componente de sección con Suspense incorporado
const Section = memo(({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<SectionFallback />}>
    {children}
  </Suspense>
));

const App = memo(function App() {
  // Combinar structured data para mejor SEO
  const structuredData = {
    ...webSiteStructuredData,
    mainEntity: personStructuredData
  };

  return (
    <>
      <SEO 
        structuredData={structuredData}
      />
      <Layout>
        <div className="relative overflow-hidden">
          {/* Hero Section - First impression */}
          <Section>
            <section aria-label="Presentación y héroe del portafolio">
              <HeroSection />
            </section>
          </Section>
          
          {/* About Section - Personal information */}
          <Section>
            <section aria-label="Sobre mí y mi experiencia">
              <AboutSection />
            </section>
          </Section>
          
          {/* Services Section - What I offer */}
          <Section>
            <section aria-label="Servicios profesionales">
              <ServicesSection />
            </section>
          </Section>
          
          {/* Technologies Section - Tech stack */}
          <Section>
            <section aria-label="Tecnologías y herramientas">
              <TechnologiesSection />
            </section>
          </Section>
          
          {/* Projects Section - Portfolio showcase */}
          <Section>
            <section aria-label="Proyectos destacados">
              <ProjectSection />
            </section>
          </Section>
          
          {/* Contact Section - Get in touch */}
          <Section>
            <section aria-label="Contacto y comunicación">
              <ContactSection />
            </section>
          </Section>
          
          {/* Footer - Site information */}
          <Section>
            <footer aria-label="Información del sitio y enlaces adicionales">
              <Footer />
            </footer>
          </Section>
        </div>
      </Layout>
    </>
  );
});

export default App;
