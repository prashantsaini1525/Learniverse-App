import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import MobileMenu from "./MobileMenu"; // Import the MobileMenu component

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  // Active nav state: initializes with the current path so Home is active by default.
  const [activeNav, setActiveNav] = useState(router.asPath || "/");

  // Update activeNav when router.asPath changes (e.g., via browser navigation)
  useEffect(() => {
    setActiveNav(router.asPath);
  }, [router.asPath]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items array
  const navItems = [
    { href: "/", text: "Home" },
    { href: "/courses", text: "Courses" },
    { href: "/#about", text: "About" },
    { href: "/#contact", text: "Contact" },
    { href: "/founder", text: "Founder" },
    { href: "/services", text: "Services" },
    { href: "/feedback", text: "Feedback" },
  ];

  // Handler for smooth scrolling on hash anchors and setting active navigation
  const handleNavItemClick = (e, href) => {
    setActiveNav(href);
    if (router.pathname === "/" && (href === "/#about" || href === "/#contact")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      // Close mobile menu on navigation
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-8 left-8 right-8 backdrop-blur-md bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 z-50 transition-shadow ${scrolled ? "shadow-lg" : "shadow-none"
        } rounded-full`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 flex justify-between items-center py-3">
        <div>
          <Link href="/">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
              Learniverse
            </h1>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6 text-lg font-medium">
          {navItems.map(({ href, text }) => (
            <Link
              key={href}
              href={href}
              onClick={(e) => handleNavItemClick(e, href)}
              className={`relative transition-colors duration-300 ease-in-out ${activeNav === href
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-900 dark:text-white hover:text-blue-500"
                }`}
            >
              {text}
            </Link>
          ))}
        </nav>


        <div className="flex items-center space-x-3">
          <div className="hidden md:flex space-x-2">
            <Link
              href="/signin"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
            >
              Sign Up
            </Link>
          </div>

          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label="Toggle Theme"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-900 text-gray-900 dark:text-white transition"
          >
            {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className={`md:hidden p-2 rounded-full shadow-lg transition ${theme === "dark"
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-gray-800 text-white hover:bg-gray-900"
              }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navItems={navItems}
        activePath={activeNav}
      />
    </header>
  );
};

export default Header;
