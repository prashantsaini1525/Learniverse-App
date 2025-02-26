import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaEye, FaHandshake } from "react-icons/fa";

export default function AboutSection() {
  return (
    <div>
      {/* Hero Section (About) */}
      <section
        id="about"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
          >
            Welcome to Learniverse
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="mt-4 text-xl md:text-2xl text-white"
          >
            Empowering lifelong learning through innovation.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 flex justify-center space-x-4"
          >
            <button className="px-8 py-4 bg-white text-indigo-700 font-semibold rounded-full hover:bg-gray-200 transition">
              Get Started
            </button>
            <button className="px-8 py-4 bg-indigo-700 text-white font-semibold rounded-full hover:bg-indigo-800 transition">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="relative pt-24 pb-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 text-center"
          >
            About Learniverse
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl text-secondary mb-12 text-center"
          >
            Learniverse is an innovative e-learning platform that blends technology
            with creative learning experiences.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Our Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-black-100 p-8 rounded-lg shadow-md transition duration-300 hover:shadow-[0_10px_30px_rgba(79,70,229,0.5)]"
            >
              <FaRocket className="text-secondary text-5xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-white">
                Our Mission
              </h3>
              <p className="text-center text-gray-300">
                To provide accessible, engaging, and innovative learning experiences.
              </p>
            </motion.div>
            {/* Our Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-black-100 p-8 rounded-lg shadow-md transition duration-300 hover:shadow-[0_10px_30px_rgba(79,70,229,0.5)]"
            >
              <FaEye className="text-secondary text-5xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-white">
                Our Vision
              </h3>
              <p className="text-center text-gray-300">
                To transform education through creativity, technology, and community engagement.
              </p>
            </motion.div>
            {/* Our Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-black-100 p-8 rounded-lg shadow-md transition duration-300 hover:shadow-[0_10px_30px_rgba(79,70,229,0.5)]"
            >
              <FaHandshake className="text-secondary text-5xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-white">
                Our Values
              </h3>
              <p className="text-center text-gray-300">
                Innovation, inclusivity, and excellence drive every aspect of our work.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community CTA Section */}
      <section className="relative py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-white mb-4"
          >
            Join Our Community
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg text-secondary mb-8"
          >
            Connect with fellow learners and educators to transform your learning
            experience.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="px-8 py-4 bg-indigo-700 text-white font-semibold rounded-full hover:bg-indigo-800 transition"
          >
            Get Started Today
          </motion.button>
        </div>
      </section>
    </div>
  );
}
