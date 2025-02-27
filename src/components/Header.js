import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import MobileMenu from "./MobileMenu"; // Import the MobileMenu component

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update only About and Contact links to use hash anchors
  const navItems = [
    { href: "/", text: "Home" },
    { href: "/courses", text: "Courses" },
    { href: "/#about", text: "About" },
    { href: "/#contact", text: "Contact" },
    { href: "/founder", text: "Founder" },
    { href: "/services", text: "Services" },
    { href: "/feedback", text: "Feedback" },
  ];

  // Handler for smooth scrolling if already on homepage
  const handleNavItemClick = (e, href) => {
    if (router.pathname === "/" && (href === "/#about" || href === "/#contact")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
   <header
  className={`fixed top-8 left-8 right-8 backdrop-blur-md bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 z-50 transition-shadow ${
    scrolled ? "shadow-lg" : "shadow-none"
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
          className={`relative group ${
            router.pathname === href
              ? "text-blue-600 dark:text-blue-400"
              : "text-gray-900 dark:text-white"
          }`}
        >
          <span className="transition-all duration-300 ease-in-out group-hover:text-blue-500">
            {text}
          </span>
          <span
            className="absolute left-0 bottom-0 h-[2px] bg-blue-500 transition-all duration-300 w-0 group-hover:w-full"
            style={{ maxWidth: "100%" }}
          ></span>
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
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle Theme"
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white transition"
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <button
        className="md:hidden p-2 text-white rounded-full shadow-lg bg-gray-200 dark:bg-gray-800 transition"
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
    activePath={router.pathname}
  />
</header>

  );
};

export default Header;
