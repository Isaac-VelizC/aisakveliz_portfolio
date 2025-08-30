import { lazy, Suspense, useEffect, useState } from "react";
import Layout from "./layouts/Layout";
import Preloader from "./components/Preloader";
// Navbar Layout
const Footer = lazy(() => import("./layouts/Footer"));
// Sections
const HeroSection = lazy(() => import("./pages/HeroSection"));
const AboutSection = lazy(() => import("./pages/AboutSection"));
const ServicesSection = lazy(() => import("./pages/ServiceSection"));
const TechnologiesSection = lazy(() => import("./pages/TechnologiesSection"));
const ProjectSection = lazy(() => import("./pages/ProjectSection"));
const ContactSection = lazy(() => import("./pages/ContactSection"));

function App() {
  const [loading, setLoading] = useState(true);

  // Preloader global (branding al inicio)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2s
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <Layout>
      <main className="relative overflow-hidden">
        <Suspense fallback={<Preloader />}>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <TechnologiesSection />
          <ProjectSection />
          <ContactSection />
          <Footer />
        </Suspense>
      </main>
    </Layout>
  );
}

export default App;
