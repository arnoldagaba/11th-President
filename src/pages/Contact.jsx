import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { validatePhoneNumber } from '../utils/formatters';
import { showToast } from '../utils/toast';
import PageTransition from '../components/PageTransition';
import ScrollProgress from '../components/ScrollProgress';
import { CardSkeleton } from '../components/Skeleton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    if (!validatePhoneNumber(formData.phone)) {
      showToast.error('Please enter a valid Ugandan phone number');
      setStatus({
        type: 'error',
        message: 'Please enter a valid Ugandan phone number',
      });
      return;
    }

    try {
      // TODO: Implement API call to send message
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      showToast.success('Message sent successfully! We will get back to you soon.');
      setStatus({
        type: 'success',
        message: 'Message sent successfully! We will get back to you soon.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      showToast.error('Failed to send message. Please try again later.');
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    }
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Location',
      content: 'Kampala, Uganda',
      delay: 0.1,
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+256 700 000 000',
      delay: 0.2,
    },
    {
      icon: '✉️',
      title: 'Email',
      content: 'campaign@rotaract.org',
      delay: 0.3,
    },
  ];

  return (
    <PageTransition>
      <ScrollProgress />
      <div className="bg-gray-50 dark:bg-dark-bg transition-colors">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative bg-gradient-to-br from-rotaract-navy to-rotaract-blue dark:from-dark-surface dark:to-dark-bg text-white py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="text-4xl sm:text-5xl font-bold mb-4"
            >
              Get in Touch
            </motion.h1>
            <p className="text-xl max-w-3xl mx-auto">
              Have questions about our campaign? We'd love to hear from you.
            </p>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          {isLoading ? (
            <div className="space-y-6">
              <CardSkeleton />
              <CardSkeleton />
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-dark-surface rounded-lg shadow-xl p-6 md:p-8 transition-colors"
            >
              {status.message && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    status.type === 'error'
                      ? 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                      : status.type === 'success'
                      ? 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                      : 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg border-gray-300 dark:border-gray-700 dark:bg-dark-bg dark:text-white shadow-sm focus:border-rotaract-blue focus:ring-rotaract-blue dark:focus:border-dark-primary dark:focus:ring-dark-primary text-base"
                      placeholder="Enter your name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg border-gray-300 dark:border-gray-700 dark:bg-dark-bg dark:text-white shadow-sm focus:border-rotaract-blue focus:ring-rotaract-blue dark:focus:border-dark-primary dark:focus:ring-dark-primary text-base"
                      placeholder="Enter your email"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg border-gray-300 dark:border-gray-700 dark:bg-dark-bg dark:text-white shadow-sm focus:border-rotaract-blue focus:ring-rotaract-blue dark:focus:border-dark-primary dark:focus:ring-dark-primary text-base"
                      placeholder="256700000000"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg border-gray-300 dark:border-gray-700 dark:bg-dark-bg dark:text-white shadow-sm focus:border-rotaract-blue focus:ring-rotaract-blue dark:focus:border-dark-primary dark:focus:ring-dark-primary text-base"
                      placeholder="Enter subject"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-gray-300 dark:border-gray-700 dark:bg-dark-bg dark:text-white shadow-sm focus:border-rotaract-blue focus:ring-rotaract-blue dark:focus:border-dark-primary dark:focus:ring-dark-primary text-base"
                    placeholder="Enter your message"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={status.type === 'loading'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-14 bg-rotaract-blue dark:bg-dark-primary text-white text-lg font-semibold rounded-lg hover:bg-opacity-90 transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600"
                >
                  {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          )}
        </div>

        {/* Contact Information */}
        <div className="bg-white dark:bg-dark-surface py-16 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: info.delay }}
                  className="p-6 bg-gray-50 dark:bg-dark-bg rounded-lg"
                >
                  <div className="text-4xl mb-4">{info.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{info.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact; 