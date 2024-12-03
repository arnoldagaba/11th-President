import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Campaign', href: '/campaign' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePath = (path) => location.pathname === path;
  
  // Check if current page needs solid navbar background
  const needsSolidBg = location.pathname === '/donate';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || needsSolidBg
          ? 'bg-white/80 dark:bg-dark-surface/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className={`font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r 
                  ${isScrolled || needsSolidBg
                    ? 'from-rotaract-navy to-rotaract-blue dark:from-dark-primary-light dark:to-dark-primary'
                    : 'from-white to-rotaract-gold-light'
                  }`}
              >
                Rotaract Campaign
              </motion.span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {navigation.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActivePath(item.href)
                      ? `${
                          isScrolled || needsSolidBg
                            ? 'bg-rotaract-blue-light text-rotaract-blue dark:bg-dark-primary-light/10 dark:text-dark-primary-light'
                            : 'bg-white/10 text-white'
                        }`
                      : `${
                          isScrolled || needsSolidBg
                            ? 'text-gray-700 hover:text-rotaract-blue dark:text-dark-text-secondary hover:dark:text-dark-primary-light'
                            : 'text-white/80 hover:text-white'
                        }`
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/donate"
                className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-rotaract-gold to-rotaract-gold-dark dark:from-dark-primary dark:to-dark-primary-dark hover:shadow-lg transition-all duration-300"
              >
                Donate Now
              </Link>
            </motion.div>
            <div className="ml-2">
              <ThemeToggle isScrolled={isScrolled || needsSolidBg} />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center space-x-2">
            <ThemeToggle isScrolled={isScrolled || needsSolidBg} />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${
                isScrolled || needsSolidBg
                  ? 'text-gray-700 dark:text-gray-300'
                  : 'text-white'
              }`}
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden bg-white/80 dark:bg-dark-surface/80 backdrop-blur-lg border-t dark:border-gray-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActivePath(item.href)
                        ? 'bg-rotaract-blue-light text-rotaract-blue dark:bg-dark-primary-light/10 dark:text-dark-primary-light'
                        : 'text-gray-700 hover:text-rotaract-blue dark:text-dark-text-secondary hover:dark:text-dark-primary-light'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/donate"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-rotaract-gold to-rotaract-gold-dark dark:from-dark-primary dark:to-dark-primary-dark"
                  onClick={() => setIsOpen(false)}
                >
                  Donate Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 