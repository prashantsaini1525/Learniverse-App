import AboutSection from "../components/AboutSection";
import Contact from "../components/Contact";
import HeroSection from "../components/HeroSection";
import StarsCanvas from "../components/canvas/Stars";

export default function HomePage() {
  return (
    <div className='relative z-0 bg-primary'>
      <HeroSection />
      <section id="next-section">
        <AboutSection />
      </section>
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
