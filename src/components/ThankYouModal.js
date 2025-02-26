"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const modalVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12, delay: 0.3 },
  },
};

const ThankYouModal = ({ onClose }) => {
  const [confettiActive, setConfettiActive] = useState(true);
  const [windowSize, setWindowSize] = useState({ width: 800, height: 600 });

  useEffect(() => {
    // Update window size for confetti dimensions
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    handleResize();
    window.addEventListener("resize", handleResize);
    // Stop confetti after 3 seconds
    const timer = setTimeout(() => {
      setConfettiActive(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 px-4"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {confettiActive && (
          <Confetti width={windowSize.width} height={windowSize.height} />
        )}
        <motion.div
          className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 max-w-xs sm:max-w-md lg:max-w-lg w-full text-center"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="flex flex-col items-center">
            {/* Animated Checkmark Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 sm:h-16 sm:w-16 text-green-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <motion.path
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              Thank You!
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Your message has been sent successfully.
            </p>
            <motion.button
              onClick={onClose}
              className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full font-semibold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Close
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThankYouModal;
