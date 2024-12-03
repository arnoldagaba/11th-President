import { PAYMENT_METHODS, API_ENDPOINTS } from '../constants/config';

export const initializeFlutterwave = async (paymentData) => {
  try {
    // Initialize Flutterwave payment
    const response = await fetch(API_ENDPOINTS.FLUTTERWAVE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });
    return await response.json();
  } catch (error) {
    console.error('Flutterwave initialization failed:', error);
    throw error;
  }
};

export const initializeMTNPayment = async (paymentData) => {
  try {
    // Initialize MTN Mobile Money payment
    const response = await fetch(API_ENDPOINTS.MTN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });
    return await response.json();
  } catch (error) {
    console.error('MTN payment initialization failed:', error);
    throw error;
  }
};

export const initializeAirtelPayment = async (paymentData) => {
  try {
    // Initialize Airtel Money payment
    const response = await fetch(API_ENDPOINTS.AIRTEL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });
    return await response.json();
  } catch (error) {
    console.error('Airtel payment initialization failed:', error);
    throw error;
  }
}; 