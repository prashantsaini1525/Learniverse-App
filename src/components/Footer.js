import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white py-12 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">My Learniverse</h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Empowering your learning journey with innovative resources and cutting-edge tools. Join our community and start learning today!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Resources</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Webinars
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Stay Connected</h2>
            <form className="mb-4">
              <div className="flex flex-wrap items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow min-w-[200px] w-full px-4 py-2 rounded-md focus:outline-none text-gray-900"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} My Learniverse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
