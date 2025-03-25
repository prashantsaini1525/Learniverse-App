// pages/founder.js
import React from "react";
import { motion } from "framer-motion";

export default function FounderPage() {
  // Animation variants for the image and text elements
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
        <div className="max-w-6xl w-full bg-white/20 backdrop-blur-md rounded-xl p-8 flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <img
              src="/images/creators/Prashant.jpeg" // sure this image exists in your public/images folder
              alt="Founder"
              className="rounded-full shadow-2xl w-64 h-64 object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-8 md:mt-0 md:pl-8 text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 className="text-4xl font-extrabold text-white mb-4">Meet Our Founder</h1>
            <p className="text-lg text-white">
              Our founder's journey is one of innovation and passion. Discover the story behind Learniverse and how vision turned into reality. With a blend of creativity and determination, our leader has set a new benchmark for excellence in education and technology.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
