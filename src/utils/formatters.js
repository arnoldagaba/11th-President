export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-UG', {
    style: 'currency',
    currency: 'UGX',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-UG', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(date));
};

export const validatePhoneNumber = (phone) => {
  // Basic validation for Uganda phone numbers
  const phoneRegex = /^(256|0)(7[0-8]|39)\d{7}$/;
  return phoneRegex.test(phone);
}; 