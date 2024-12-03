import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ScrollProgress from '../components/ScrollProgress';

const About = () => {
  const milestones = [
    {
      year: '2018',
      title: 'Joined Rotaract',
      description: 'Started journey as an active member of the Rotaract community.',
    },
    {
      year: '2019',
      title: 'Committee Leadership',
      description: 'Led successful community service projects and initiatives.',
    },
    {
      year: '2020',
      title: 'Club Secretary',
      description: 'Served as Club Secretary, strengthening administrative processes.',
    },
    {
      year: '2021',
      title: 'Vice President',
      description: 'Supported club growth and membership development initiatives.',
    },
  ];

  return (
    <PageTransition>
      <ScrollProgress />
      <div className="bg-gray-50 dark:bg-dark-bg transition-colors">
        {/* Hero Section with refined gradient and particles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative bg-gradient-to-br from-rotaract-navy via-rotaract-navy-dark to-rotaract-blue dark:from-dark-surface dark:via-dark-surfaceHover dark:to-dark-primary-dark text-white py-20 overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-rotaract-gold/10 dark:bg-dark-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-rotaract-blue/10 dark:bg-dark-secondary/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-rotaract-gold-light dark:from-dark-text-primary dark:to-dark-primary-light"
            >
              About the Candidate
            </motion.h1>
            <p className="text-xl max-w-3xl mx-auto text-rotaract-gold-light dark:text-dark-text-secondary">
              A dedicated Rotaractor with a vision for positive change and community impact.
            </p>
          </div>
        </motion.div>

        {/* Vision & Mission with glass effect */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-rotaract-blue-light/20 dark:border-dark-primary/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-16 w-16 bg-gradient-to-br from-rotaract-blue-light to-rotaract-blue dark:from-dark-primary-light dark:to-dark-primary rounded-full mb-6 flex items-center justify-center">
                <span className="text-2xl">👁️</span>
              </div>
              <h2 className="text-3xl font-bold text-rotaract-navy dark:text-dark-text-primary mb-6">
                Our Vision
              </h2>
              <p className="text-gray-600 dark:text-dark-text-secondary">
                To create a more vibrant and impactful Rotaract community that empowers young leaders
                and creates lasting positive change in our society.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-rotaract-blue-light/20 dark:border-dark-primary/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-16 w-16 bg-gradient-to-br from-rotaract-gold-light to-rotaract-gold dark:from-dark-secondary-light dark:to-dark-secondary rounded-full mb-6 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-3xl font-bold text-rotaract-navy dark:text-dark-text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-dark-text-secondary">
                To strengthen our club through innovative leadership, meaningful service projects,
                and enhanced member engagement while fostering professional development.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Timeline with refined styling */}
        <div className="bg-gradient-to-b from-white to-rotaract-blue-light dark:from-dark-surface dark:to-dark-bg py-16 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-rotaract-navy to-rotaract-blue dark:from-dark-text-primary dark:to-dark-primary mb-12">
              Rotaract Journey
            </h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-rotaract-blue-light/20 dark:border-dark-primary/20 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-24">
                    <div className="text-xl font-bold bg-gradient-to-r from-rotaract-blue to-rotaract-navy dark:from-dark-primary dark:to-dark-primary-dark bg-clip-text text-transparent">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-rotaract-navy dark:text-dark-text-primary">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-dark-text-secondary">
                      {milestone.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-rotaract-blue-light to-rotaract-blue dark:from-dark-primary-light dark:to-dark-primary rounded-full opacity-75" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About; 