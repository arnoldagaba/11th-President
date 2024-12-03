import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/formatters';
import PageTransition from '../components/PageTransition';
import ScrollProgress from '../components/ScrollProgress';

const Home = () => {
  const totalDonations = 2500000; // In UGX

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const features = [
    {
      title: 'Vision',
      description: 'Building a stronger, more impactful Rotaract community',
      icon: '🎯',
    },
    {
      title: 'Experience',
      description: 'Years of dedicated service and leadership',
      icon: '⭐',
    },
    {
      title: 'Innovation',
      description: 'Bringing fresh ideas to club management',
      icon: '💡',
    },
  ];

  return (
    <PageTransition>
      <ScrollProgress />
      <div className="animate-fade-in">
        {/* Hero Section with improved dark mode gradients */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative bg-gradient-to-br from-rotaract-navy via-rotaract-navy-dark to-rotaract-blue dark:from-dark-bg dark:via-dark-surface dark:to-dark-primary/40 text-white py-24 sm:py-32"
        >
          {/* Enhanced decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-rotaract-gold/10 dark:bg-dark-primary/5 rounded-full blur-3xl transform rotate-45 animate-pulse" />
            <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-rotaract-blue/10 dark:bg-dark-secondary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 dark:from-black/20 to-transparent" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-rotaract-gold-light to-rotaract-gold dark:from-dark-text-primary dark:via-dark-primary-light dark:to-dark-primary"
              >
                Journey to the 11th Presidency
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl sm:text-2xl mb-8 text-white/90 dark:text-dark-text-secondary font-light"
              >
                Together, let's build a stronger Rotaract community
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
              >
                <Link
                  to="/donate"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-rotaract-gold to-rotaract-gold-dark dark:from-dark-primary dark:to-dark-primary-dark text-rotaract-navy-dark dark:text-white font-semibold rounded-lg hover:shadow-xl dark:shadow-dark-primary/20 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                >
                  Support Our Campaign
                </Link>
                <Link
                  to="/about"
                  className="w-full sm:w-auto px-8 py-4 border-2 border-white/20 dark:border-dark-primary-light/20 text-white font-semibold rounded-lg hover:bg-white/10 dark:hover:bg-dark-primary-light/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Section with improved cards */}
        <div className="py-16 bg-gradient-to-b from-white to-rotaract-blue-light/30 dark:from-dark-surface dark:to-dark-bg transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="group bg-white/80 dark:bg-dark-surface/50 backdrop-blur-sm rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-rotaract-blue-light/10 dark:border-dark-primary/10 dark:hover:border-dark-primary/30"
                >
                  <div className="text-4xl mb-6 bg-gradient-to-br from-rotaract-blue-light to-rotaract-blue dark:from-dark-primary-light/20 dark:to-dark-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-rotaract-navy dark:text-dark-text-primary group-hover:text-rotaract-blue dark:group-hover:text-dark-primary-light transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-dark-text-secondary/80 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Donation Counter with enhanced styling */}
        <div className="bg-gradient-to-t from-rotaract-navy-light/50 to-white dark:from-dark-bg dark:to-dark-surface py-16 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center bg-white/90 dark:bg-dark-surface/50 backdrop-blur-md rounded-xl p-8 sm:p-12 shadow-xl dark:shadow-dark-primary/10 border border-rotaract-blue-light/20 dark:border-dark-primary/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-rotaract-navy to-rotaract-blue dark:from-dark-text-primary dark:to-dark-primary bg-clip-text text-transparent mb-6">
                Campaign Progress
              </h2>
              <div className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-rotaract-blue via-rotaract-gold to-rotaract-navy dark:from-dark-primary dark:via-dark-secondary dark:to-dark-primary-light bg-clip-text text-transparent mb-2">
                <CountUp
                  start={0}
                  end={totalDonations}
                  separator=","
                  duration={2.5}
                  prefix="UGX "
                />
              </div>
              <p className="text-gray-600 dark:text-dark-text-secondary/80 mb-8 text-lg">
                raised so far
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/donate"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-rotaract-blue to-rotaract-navy dark:from-dark-primary dark:to-dark-primary-dark text-white font-semibold rounded-lg hover:shadow-xl dark:shadow-dark-primary/20 transition-all duration-300 backdrop-blur-sm"
                >
                  Make a Donation
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home; 