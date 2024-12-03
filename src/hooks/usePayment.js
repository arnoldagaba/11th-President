import { useState } from 'react';
import { useDonation } from '../contexts/DonationContext';
import { 
  initializeFlutterwave, 
  initializeMTNPayment, 
  initializeAirtelPayment 
} from '../services/paymentServices';
import { PAYMENT_METHODS } from '../constants/config';

export const usePayment = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const { addDonation } = useDonation();

  const processPayment = async (amount, paymentMethod, donorInfo) => {
    setIsProcessing(true);
    setError(null);

    try {
      let paymentResponse;
      
      switch (paymentMethod) {
        case PAYMENT_METHODS.FLUTTERWAVE:
          paymentResponse = await initializeFlutterwave({
            amount,
            email: donorInfo.email,
            name: donorInfo.name,
          });
          break;

        case PAYMENT_METHODS.MTN:
          paymentResponse = await initializeMTNPayment({
            amount,
            phone: donorInfo.phone,
          });
          break;

        case PAYMENT_METHODS.AIRTEL:
          paymentResponse = await initializeAirtelPayment({
            amount,
            phone: donorInfo.phone,
          });
          break;

        default:
          throw new Error('Invalid payment method');
      }

      if (paymentResponse.success) {
        await addDonation(amount, paymentMethod, donorInfo);
        return paymentResponse;
      } else {
        throw new Error(paymentResponse.message);
      }
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    processPayment,
    isProcessing,
    error,
  };
}; 