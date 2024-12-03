import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Campaign', href: '/campaign' },
        { name: 'Contact', href: '/contact' },
        { name: 'Donate', href: '/donate' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { name: 'Facebook', href: 'https://facebook.com', external: true },
        { name: 'Twitter', href: 'https://twitter.com', external: true },
        { name: 'Instagram', href: 'https://instagram.com', external: true },
        { name: 'LinkedIn', href: 'https://linkedin.com', external: true },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-rotaract-navy-dark dark:bg-dark-surface text-white transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h2 
              className="text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Rotaract Campaign
            </motion.h2>
            <p className="text-gray-300 dark:text-gray-400">
              Together, let's build a stronger Rotaract community and create lasting change.
            </p>
            <div className="pt-4">
              <p className="text-sm text-gray-400 dark:text-gray-500">
                © {currentYear} Rotaract Campaign.
                <br />
                All rights reserved.
              </p>
            </div>
          </motion.div>

          {/* Quick Links and Connect Sections */}
          {sections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4 text-rotaract-gold-light dark:text-dark-primary-light">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <motion.li 
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-rotaract-gold-light dark:text-dark-text-secondary hover:dark:text-dark-primary-light transition-colors flex items-center"
                      >
                        {link.name}
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-rotaract-gold-light dark:text-dark-text-secondary hover:dark:text-dark-primary-light transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 pt-8 border-t border-gray-700 dark:border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 dark:text-gray-500">
              Made with ❤️ for the Rotaract community
            </div>
            <div className="flex space-x-6">
              <a
                href="#privacy"
                className="text-sm text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-dark-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-sm text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-dark-primary transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer; 