import { createContext, useContext, useState, useEffect } from 'react';

const DonationContext = createContext();

export const DonationProvider = ({ children }) => {
  const [totalDonations, setTotalDonations] = useState(0);
  const [recentDonations, setRecentDonations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addDonation = async (amount, paymentMethod, donorInfo) => {
    setIsLoading(true);
    try {
      // TODO: Implement API call to save donation
      setTotalDonations(prev => prev + amount);
      setRecentDonations(prev => [...prev, { amount, paymentMethod, donorInfo, timestamp: new Date() }]);
    } catch (error) {
      console.error('Failed to process donation:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DonationContext.Provider 
      value={{ 
        totalDonations, 
        recentDonations, 
        addDonation, 
        isLoading 
      }}
    >
      {children}
    </DonationContext.Provider>
  );
};

export const useDonation = () => {
  const context = useContext(DonationContext);
  if (!context) {
    throw new Error('useDonation must be used within a DonationProvider');
  }
  return context;
}; 