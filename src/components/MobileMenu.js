// components/MobileMenu.js
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = ({ menuOpen, setMenuOpen, navItems, activePath }) => {
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden absolute top-full left-8 right-8 mx-auto mt-2 max-w-screen-xl rounded-lg border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md shadow-lg p-6 z-50"
        >
          <nav className="flex flex-col space-y-4 text-base font-medium text-gray-900 dark:text-white">
            {navItems.map(({ href, text }) => (
              <Link
                key={href}
                href={href}
                className={`relative group inline-block ${
                  activePath === href
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-900 dark:text-white"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <span className="relative inline-block w-fit transition-all duration-300 ease-in-out group-hover:text-blue-500">
                  {text}
                  <span
                    className="absolute left-0 bottom-0 h-[2px] bg-blue-500 transition-all duration-300 w-0 group-hover:w-full"
                    style={{ maxWidth: "100%" }}
                  ></span>
                </span>
              </Link>
            ))}
            {/* Mobile Auth Button */}
            <div className="flex flex-col space-y-2 mt-4">
              <Link
                href="/login"
                className="px-4 py-2 btn btn-primary text-white rounded-full text-center transition"
              >
                Login
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
