// components/Header.js
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, ChevronUp, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState(router.asPath || "/");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showExtra, setShowExtra] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const [menuTop, setMenuTop] = useState(0);

  // Calculate the header's bottom position (plus a margin)
  useEffect(() => {
    const updateMenuTop = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        // Adding an extra 8px margin; adjust as needed.
        setMenuTop(rect.bottom + 8);
      }
    };

    updateMenuTop();
    window.addEventListener("resize", updateMenuTop);
    return () => window.removeEventListener("resize", updateMenuTop);
  }, [menuOpen]);

  // Close the mobile menu when the screen width exceeds 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", text: "Home" },
    { href: "/courses", text: "Courses" },
    { href: "/#about", text: "About" },
    { href: "/#contact", text: "Contact" },
    { href: "/founder", text: "Founder" },
    { href: "/services", text: "Services" },
    { href: "/feedback", text: "Feedback" },
  ];

  // Main navigation items (always visible)
  const mainNavItems = navItems.filter(
    (item) => !["Founder", "Services", "Feedback"].includes(item.text)
  );
  // Extra navigation items for the Explore dropdown
  const extraNavItems = navItems.filter((item) =>
    ["Founder", "Services", "Feedback"].includes(item.text)
  );

  // Handler for navigation clicks (including smooth scrolling for hash links)
  const handleNavItemClick = (e, href) => {
    setActiveNav(href);
    if (router.pathname === "/" && (href === "/#about" || href === "/#contact")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
    setShowExtra(false);
  };

  return (
    <div>
      {/* Header with a ref to measure its bottom edge */}
      <header
        ref={headerRef}
        className={`fixed top-8 left-8 right-8 backdrop-blur-md bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 z-50 transition-shadow rounded-full ${
          scrolled ? "shadow-lg" : "shadow-none"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 flex justify-between items-center py-3">
          {/* Left: Logo */}
          <div>
            <Link href="/">
              <h1 className="text-xl sm:text-2xl md:text-2xl font-extrabold text-gray-900 dark:text-white">
                Learniverse
              </h1>
            </Link>
          </div>

          {/* Center: Desktop navigation */}
          <nav className="hidden lg:flex space-x-6 text-base font-medium items-center">
            {mainNavItems.map(({ href, text }) => (
              <Link
                key={href}
                href={href}
                onClick={(e) => handleNavItemClick(e, href)}
                className={`transition-colors duration-300 ease-in-out ${
                  activeNav === href
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-900 dark:text-white hover:text-blue-500"
                }`}
              >
                {text}
              </Link>
            ))}

            {/* Explore Dropdown */}
            <div className="relative inline-block">
              <button
                onClick={() => setShowExtra((prev) => !prev)}
                onMouseEnter={() => setShowExtra(true)}
                onMouseLeave={() => setShowExtra(false)}
                className="flex items-center space-x-1 transition-colors duration-300 ease-in-out text-gray-900 dark:text-white hover:text-blue-500"
              >
                <span>Explore</span>
                {showExtra ? (
                  <ChevronUp size={20} className="text-blue-600 dark:text-blue-400" />
                ) : (
                  <ChevronDown
                    size={20}
                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                  />
                )}
              </button>
              <div
                onMouseEnter={() => setShowExtra(true)}
                onMouseLeave={() => setShowExtra(false)}
                className={`absolute right-0 top-full mt-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-10 transition-all duration-300 transform ${
                  showExtra ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                }`}
              >
                <div className="py-2">
                  {extraNavItems.map(({ href, text }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={(e) => handleNavItemClick(e, href)}
                      className={`block px-4 py-2 transition-colors duration-300 ease-in-out ${
                        activeNav === href
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                      }`}
                    >
                      {text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Login Button */}
            <Link
              href="/login"
              className="btn btn-primary btn-sm rounded-full text-white ml-4"
            >
              Login
            </Link>
          </nav>

          {/* Right: Theme toggler & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              aria-label="Toggle Theme"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white transition"
            >
              {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="lg:hidden p-2 rounded-full shadow-lg transition bg-gray-800 text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu receives the computed top offset */}
      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navItems={navItems}
        activePath={activeNav}
        menuTop={menuTop}
      />
    </div>
  );
};

export default Header;
