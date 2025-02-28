// components/MobileMenu.js
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useClerk, useUser, UserButton } from "@clerk/nextjs";

const MobileMenu = ({ menuOpen, setMenuOpen, navItems, activePath, menuTop }) => {
  const clerk = useClerk();
  const { isLoaded, user } = useUser();

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          style={{ top: menuTop }}
          className="fixed left-16 right-16 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md shadow-lg p-4 z-40"
        >
          <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
            <nav className="flex flex-col items-center space-y-4 text-base font-medium text-gray-900 dark:text-white">
              {navItems.map(({ href, text }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`relative group text-center transition-colors duration-300 ease-in-out ${
                    activePath === href
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-900 dark:text-white hover:text-blue-500"
                  }`}
                >
                  <span className="relative inline-block">
                    {text}
                    <span
                      className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full group-hover:left-0"
                      style={{ maxWidth: "100%" }}
                    ></span>
                  </span>
                </Link>
              ))}
              <div className="mt-4">
                {!isLoaded ? (
                  <div style={{ width: "40px", height: "40px" }}></div>
                ) : user ? (
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-900 dark:text-white text-sm sm:text-base leading-tight align-middle">
                      Hi, {user.firstName || "User"}!
                    </span>
                    <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0">
                      <UserButton
                        appearance={{
                          elements: {
                            userButtonPopover:
                              "fixed top-20 right-4 z-50 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg rounded p-2",
                          },
                        }}
                        className="m-0 p-0"
                      />
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      setTimeout(() => {
                        clerk.openSignIn();
                      }, 100);
                    }}
                    className="px-4 py-2 btn btn-primary text-white rounded-full text-center transition transform hover:scale-105"
                  >
                    Login
                  </button>
                )}
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
