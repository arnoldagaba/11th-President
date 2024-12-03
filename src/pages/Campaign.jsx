import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ScrollProgress from '../components/ScrollProgress';
import { CardSkeleton } from '../components/Skeleton';
import { useState, useEffect } from 'react';

const Campaign = () => {
  const [isLoading, setIsLoading] = useState(true);
  const initiatives = [
    {
      title: 'Community Impact',
      description: 'Launching new service projects focusing on education and healthcare.',
      icon: '🌟',
    },
    {
      title: 'Member Development',
      description: 'Implementing mentorship programs and professional workshops.',
      icon: '📈',
    },
    {
      title: 'Club Growth',
      description: 'Expanding our reach and strengthening partnerships.',
      icon: '🤝',
    },
    {
      title: 'Innovation',
      description: 'Introducing digital solutions for better club management.',
      icon: '💡',
    },
  ];

  const updates = [
    {
      title: 'Campaign Launch Event',
      date: '2024-03-15',
      description: 'Successfully launched our campaign with over 100 attendees.',
      image: 'https://placehold.co/600x400',
    },
    {
      title: 'Community Service Drive',
      date: '2024-03-22',
      description: 'Led a successful community service project with local partners.',
      image: 'https://placehold.co/600x400',
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageTransition>
      <ScrollProgress />
      <div className="bg-gray-50 dark:bg-dark-bg transition-colors">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative bg-gradient-to-br from-rotaract-navy via-rotaract-navy-dark to-rotaract-blue dark:from-dark-surface dark:via-dark-surfaceHover dark:to-dark-primary-dark text-white py-20 overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-rotaract-gold/10 dark:bg-dark-primary/10 rounded-full blur-3xl transform rotate-45" />
            <div className="absolute -bottom-1/4 -left-1/4 w-72 h-72 bg-rotaract-blue/10 dark:bg-dark-secondary/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-rotaract-gold-light dark:from-dark-text-primary dark:to-dark-primary-light"
            >
              Campaign Updates
            </motion.h1>
            <p className="text-xl max-w-3xl mx-auto text-rotaract-gold-light dark:text-dark-text-secondary">
              Stay informed about our campaign progress and upcoming initiatives.
            </p>
          </div>
        </motion.div>

        {/* Key Initiatives */}
        <div className="relative py-16 bg-gradient-to-b from-white to-rotaract-blue-light dark:from-dark-surface dark:to-dark-bg transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-rotaract-navy to-rotaract-blue dark:from-dark-text-primary dark:to-dark-primary mb-12">
              Key Initiatives
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {isLoading ? (
                [...Array(4)].map((_, index) => <CardSkeleton key={index} />)
              ) : (
                initiatives.map((initiative, index) => (
                  <motion.div
                    key={initiative.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                    className="bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm rounded-lg p-8 text-center shadow-lg border border-rotaract-blue-light/20 dark:border-dark-primary/20 transition-all duration-300"
                  >
                    <div className="text-4xl mb-4 bg-gradient-to-br from-rotaract-blue-light to-rotaract-blue dark:from-dark-primary-light dark:to-dark-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                      {initiative.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-rotaract-navy dark:text-dark-text-primary">
                      {initiative.title}
                    </h3>
                    <p className="text-gray-600 dark:text-dark-text-secondary">
                      {initiative.description}
                    </p>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Recent Updates */}
        <div className="bg-gradient-to-t from-rotaract-navy-light to-white dark:from-dark-bg dark:to-dark-surface py-16 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-rotaract-navy to-rotaract-blue dark:from-dark-text-primary dark:to-dark-primary mb-12">
              Recent Updates
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {isLoading ? (
                [...Array(2)].map((_, index) => <CardSkeleton key={index} />)
              ) : (
                updates.map((update, index) => (
                  <motion.div
                    key={update.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                    className="bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-rotaract-blue-light/20 dark:border-dark-primary/20 transition-all duration-300"
                  >
                    <div className="relative">
                      <img
                        src={update.image}
                        alt={update.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-rotaract-navy dark:text-dark-text-primary">
                        {update.title}
                      </h3>
                      <p className="text-sm text-rotaract-blue dark:text-dark-primary-light mb-2">
                        {new Date(update.date).toLocaleDateString('en-UG', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                      <p className="text-gray-600 dark:text-dark-text-secondary">
                        {update.description}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 text-rotaract-blue dark:text-dark-primary-light font-medium hover:text-rotaract-blue-dark dark:hover:text-dark-primary transition-colors"
                      >
                        Read more →
                      </motion.button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Campaign; 