import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePayment } from '../hooks/usePayment';
import { DONATION_TIERS, PAYMENT_METHODS } from '../constants/config';
import { formatCurrency, validatePhoneNumber } from '../utils/formatters';
import { showToast } from '../utils/toast';
import PageTransition from '../components/PageTransition';
import ScrollProgress from '../components/ScrollProgress';
import { CardSkeleton } from '../components/Skeleton';

const Donate = () => {
  const [selectedTier, setSelectedTier] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const { processPayment, isProcessing, error } = usePayment();

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const amount = selectedTier ? selectedTier.amount : Number(customAmount);

    if (!amount || amount < 1000) {
      showToast.error('Please enter a valid amount (minimum 1,000 UGX)');
      return;
    }

    if (!paymentMethod) {
      showToast.error('Please select a payment method');
      return;
    }

    if (paymentMethod !== PAYMENT_METHODS.FLUTTERWAVE && !validatePhoneNumber(donorInfo.phone)) {
      showToast.error('Please enter a valid Ugandan phone number');
      return;
    }

    try {
      await processPayment(amount, paymentMethod, donorInfo);
      showToast.success('Payment initiated successfully!');
      // Reset form after successful payment
      setSelectedTier(null);
      setCustomAmount('');
      setDonorInfo({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      showToast.error('Payment failed. Please try again.');
    }
  };

  return (
    <PageTransition>
      <ScrollProgress />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-dark-surface rounded-lg shadow-xl p-6 md:p-8 transition-colors"
        >
          <h1 className="text-3xl font-bold text-rotaract-navy dark:text-white mb-6">
            Support Our Campaign
          </h1>
          
          {error && (
            <div className="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}

          {isLoading ? (
            <div className="space-y-6">
              <CardSkeleton />
              <CardSkeleton />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Donation Tiers */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Select Amount
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {DONATION_TIERS.map((tier) => (
                    <motion.button
                      key={tier.amount}
                      type="button"
                      onClick={() => {
                        setSelectedTier(tier);
                        setCustomAmount('');
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        selectedTier === tier
                          ? 'border-rotaract-blue bg-rotaract-blue dark:border-dark-primary dark:bg-dark-primary text-white'
                          : 'border-gray-200 dark:border-gray-700 hover:border-rotaract-blue dark:hover:border-dark-primary'
                      }`}
                    >
                      <div className="font-bold text-lg dark:text-white">
                        {formatCurrency(tier.amount)}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{tier.label}</div>
                    </motion.button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mt-6">
                  <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Or enter custom amount
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="text-gray-500 dark:text-gray-400 text-base">UGX</span>
                    </div>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedTier(null);
                      }}
                      className="w-full h-12 pl-16 pr-4 rounded-lg border-gray-300 dark:border-gray-700 dark:bg-dark-bg dark:text-white shadow-sm focus:border-rotaract-blue focus:ring-rotaract-blue dark:focus:border-dark-primary dark:focus:ring-dark-primary text-base"
                      placeholder="Enter amount"
                      min="1000"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Minimum amount: UGX 1,000
                  </p>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Payment Method
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.values(PAYMENT_METHODS).map((method) => (
                    <motion.button
                      key={method}
                      type="button"
                      onClick={() => setPaymentMethod(method)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        paymentMethod === method
                          ? 'border-rotaract-blue bg-rotaract-blue dark:border-dark-primary dark:bg-dark-primary text-white'
                          : 'border-gray-200 dark:border-gray-700 hover:border-rotaract-blue dark:hover:border-dark-primary'
                      }`}
                    >
                      {method.charAt(0).toUpperCase() + method.slice(1)}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Donor Information */}
              <div className="space-y-6">
                <div>
                  <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={donorInfo.name}
                    onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                    className="w-full h-12 px-4 rounded-lg border-gray-300 dark:border-gray-700 dark:bg-dark-bg dark:text-white shadow-sm focus:border-rotaract-blue focus:ring-rotaract-blue dark:focus:border-dark-primary dark:focus:ring-dark-primary text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={donorInfo.email}
                    onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                    className="w-full h-12 px-4 rounded-lg border-gray-300 dark:border-gray-700 dark:bg-dark-bg dark:text-white shadow-sm focus:border-rotaract-blue focus:ring-rotaract-blue dark:focus:border-dark-primary dark:focus:ring-dark-primary text-base"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={donorInfo.phone}
                    onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                    className="w-full h-12 px-4 rounded-lg border-gray-300 dark:border-gray-700 dark:bg-dark-bg dark:text-white shadow-sm focus:border-rotaract-blue focus:ring-rotaract-blue dark:focus:border-dark-primary dark:focus:ring-dark-primary text-base"
                    placeholder="256700000000"
                  />
                </div>

                <div>
                  <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    value={donorInfo.message}
                    onChange={(e) => setDonorInfo({ ...donorInfo, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border-gray-300 dark:border-gray-700 dark:bg-dark-bg dark:text-white shadow-sm focus:border-rotaract-blue focus:ring-rotaract-blue dark:focus:border-dark-primary dark:focus:ring-dark-primary text-base"
                    placeholder="Add a message with your donation"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isProcessing}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full h-14 mt-8 bg-rotaract-blue dark:bg-dark-primary text-white text-lg font-semibold rounded-lg hover:bg-opacity-90 transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600"
              >
                {isProcessing ? 'Processing...' : 'Proceed to Payment'}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Donate; 