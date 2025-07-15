import { Suspense, lazy } from "react";
import Layout from "./Layouts/Layout";
import Header from "./Layouts/Header";
import CursorGlow from "./components/CursorGlow";
import Footer from "./Layouts/Footer";
import LoadingComponent from "./components/LoadingComponent";

// Carga diferida de las secciones principales usando React.lazy
const HeroSection = lazy(() => import("./Pages/Hero"));
const AboutSection = lazy(() => import("./Pages/About"));
const ProjectSection = lazy(() => import("./Pages/Projects"));
const TechnologiesSection = lazy(() => import("./Pages/Technologies"));
const ContactSection = lazy(() => import("./Pages/Contact"));

function App() {
  return (
    <>
      <CursorGlow /> {/* Se carga siempre */}
      <Layout>
        <Header />
        <main className="relative xl:mx-28 px-10 md:mx-18 lg:mx-28 overflow-hidden">
          {/* Suspense envuelve las secciones lazy para mostrar Preloader mientras cargan */}
          <Suspense fallback={<LoadingComponent />}>
            <HeroSection />
            <AboutSection />
            <TechnologiesSection />
            <ProjectSection />
            <ContactSection />
          </Suspense>
          <Footer /> {/* Si Footer es pequeño, lo puedes dejar fuera del Suspense */}
        </main>
      </Layout>
    </>
  );
}

export default App;
