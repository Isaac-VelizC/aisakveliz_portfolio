import { Suspense } from "react";
import Layout from "./Layouts/Layout";
import Header from "./Layouts/Header";
import Preloader from "./components/Preloader";
import CursorGlow from "./components/CursorGlow";
import Footer from "./Layouts/Footer";
import HeroSection from "./Pages/Hero";
import AboutSection from "./Pages/About";
import ProjectSection from "./Pages/Projects";
import TechnologiesSection from "./Pages/Technologies";
import ContactSection from "./Pages/Contact";

function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <CursorGlow />
      <Layout>
        <Header />
        <main className="relative xl:mx-28 px-10 md:mx-18 lg:mx-28 overflow-hidden">
          <HeroSection />
          <AboutSection />
          <TechnologiesSection />
          <ProjectSection /> 
          <ContactSection />
          <Footer />
        </main>
      </Layout>
    </Suspense>
  );
}

export default App;
