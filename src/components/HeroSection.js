import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AnimatedText from "./AnimatedText";
import CTAButton from "./CTAButton";
import LottieAnimation from "./LottieAnimation";
import animationData from "../../public/animations/learning.json";
import { FaChevronDown } from "react-icons/fa";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const words = ["Learniverse", "Knowledge", "Innovation"];

  // Smooth scroll to next section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen pt-40 pb-16 text-white">
      {/* Container with restricted max width for large screens */}
      <div className="mx-auto max-w-7xl px-8 md:px-16 xl:px-20">
        <div className="flex flex-col xl:flex-row items-center justify-center gap-8">
          {/* Left: Text, AnimatedText, and CTA Buttons */}
          <motion.div
            className="w-full xl:w-1/2 text-center xl:text-left space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg font-medium italic opacity-90">
              "The beautiful thing about learning is that nobody can take it away from you."
            </p>
            <h1 className="text-4xl xl:text-5xl font-bold leading-snug">
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
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4">
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

          {/* Right: Lottie Animation */}
          <motion.div
            className="w-full xl:w-1/2 flex justify-center xl:justify-end mt-8 xl:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full max-w-md">
              {mounted && (
                <LottieAnimation
                  animationData={animationData}
                  width="100%"
                  height="100%"
                />
              )}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer z-50"
          onClick={scrollToNextSection}
        >
          <FaChevronDown className="animate-bounce text-white text-3xl" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
