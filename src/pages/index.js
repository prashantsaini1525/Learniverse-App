// pages/index.js
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FounderSection from "../components/FounderSection"; // New import
import Contact from "../components/Contact";
import StarsCanvas from "../components/canvas/Stars";

export default function HomePage() {
  return (
    <div className="relative z-0 bg-primary">
      <HeroSection />
      <section id="next-section">
        <AboutSection />
      </section>
      <FounderSection />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
