import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import ServicePreloader from "./components/custom/ServicePreloader";
import Navigation from "./components/custom/Navigation";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Workflow from "./sections/Workflow";
import Gallery from "./sections/Gallery";
import Trust from "./sections/Trust";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import "./App.css";

const normalizePath = (path: string) => {
  const normalized = path.replace(/\/+$/, "");
  return normalized || "/";
};

const getCurrentRoute = () => {
  const hash = window.location.hash;
  if (hash.startsWith("#/")) {
    return normalizePath(hash.slice(1));
  }

  return normalizePath(window.location.pathname);
};

function App() {
  const [path, setPath] = useState(() => getCurrentRoute());

  const isPrivacyPage = path === "/privatnost";
  const isTermsPage = path === "/uslovi-koristenja";

  useEffect(() => {
    const syncRoute = () => setPath(getCurrentRoute());
    window.addEventListener("popstate", syncRoute);
    window.addEventListener("hashchange", syncRoute);

    return () => {
      window.removeEventListener("popstate", syncRoute);
      window.removeEventListener("hashchange", syncRoute);
    };
  }, []);

  return (
    <ReactLenis
      root
      options={{
        duration: 1.05,
        smoothWheel: true,
        touchMultiplier: 1.2,
      }}
    >
      <ServicePreloader />
      <div className="min-h-screen bg-[#0d0d0d] text-[#f2f2f2]">
        {isPrivacyPage ? (
          <PrivacyPage />
        ) : isTermsPage ? (
          <TermsPage />
        ) : (
          <>
            <Navigation />
            <main>
              <Hero />
              <Gallery />
              <Services />
              <Workflow />
              <Trust />
              <FAQ />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </div>
    </ReactLenis>
  );
}

export default App;
