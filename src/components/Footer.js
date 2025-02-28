import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaHome,
  FaInfoCircle,
  FaGraduationCap,
  FaPhoneAlt,
  FaNewspaper,
  FaChalkboardTeacher,
  FaVideo,
  FaQuestionCircle
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white py-12 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-2xl font-bold mb-4">
              My Learniverse
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-sm">
              Empowering your learning journey with innovative resources and cutting-edge tools. Join our community and start learning today!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-xl font-semibold mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaHome className="text-gray-300" />
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-sm"
                >
                  Home
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaInfoCircle className="text-gray-300" />
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-sm"
                >
                  About Us
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaGraduationCap className="text-gray-300" />
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-sm"
                >
                  Courses
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-gray-300" />
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-xl font-semibold mb-4">
              Resources
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaNewspaper className="text-gray-300" />
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-sm"
                >
                  Blog
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaChalkboardTeacher className="text-gray-300" />
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-sm"
                >
                  Tutorials
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaVideo className="text-gray-300" />
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-sm"
                >
                  Webinars
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaQuestionCircle className="text-gray-300" />
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-sm"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-xl font-semibold mb-4">
              Stay Connected
            </h2>
            <form className="mb-4">
              <div className="flex flex-wrap items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered input-primary flex-grow md:min-w-0 w-full"
                />
                <button type="submit" className="btn btn-primary  flex-shrink-0 text-gray-200">
                  Subscribe
                </button>
              </div>
            </form>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-xs sm:text-sm md:text-xs">
            &copy; {new Date().getFullYear()} My Learniverse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
