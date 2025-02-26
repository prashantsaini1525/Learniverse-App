import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AnimatedText from "./AnimatedText";
import CTAButton from "./CTAButton";
import LottieAnimation from "./LottieAnimation";
import animationData from "../../public/animations/learning.json";
import { FaChevronDown } from "react-icons/fa"; // Ensure react-icons is installed

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  // Only render client-side components after mounting to prevent SSR hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  const words = ["Learniverse", "Knowledge", "Innovation"];

  // Scrolls to the element with id "next-section"
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-16 pt-40 md:pt-24 pb-16 text-white">
      {/* Left Content with animation */}
      <motion.div
        className="flex-1 max-w-2xl text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg md:text-2xl font-medium italic opacity-90">
          "The beautiful thing about learning is that nobody can take it away from you."
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-snug">
          Unlock Your Potential
          <br />
          with{" "}
          <span className="text-yellow-300">
            <AnimatedText words={words} />
          </span>{" "}
          🚀
        </h1>
        <p className="text-lg opacity-80">
          Education is a journey of continuous growth and discovery. Join us to explore knowledge, skills, and innovative learning experiences!
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <CTAButton
            href="https://youtube.com/@itechworldxrt?si=k9xn3yAjoXG_DgDM"
            target="_blank"
            variant="primary"
            className="w-full sm:w-auto"
          >
            🎥 Watch Now
          </CTAButton>
          <CTAButton href="#courses" variant="secondary" className="w-full sm:w-auto">
            📚 Explore Courses
          </CTAButton>
        </div>
      </motion.div>

      {/* Right: Lottie Animation Container */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end max-w-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-md">
          {mounted && <LottieAnimation animationData={animationData} />}
        </div>
      </motion.div>

      {/* Scroll Indicator at bottom center */}
      <div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer z-50"
        onClick={scrollToNextSection}
      >
        <FaChevronDown className="animate-bounce text-white text-3xl" />
      </div>
    </section>
  );
};

export default HeroSection;
