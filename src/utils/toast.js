import { toast } from 'react-toastify';

export const showToast = {
  success: (message) => {
    toast.success(message, {
      className: 'dark:bg-dark-surface dark:text-white',
    });
  },
  error: (message) => {
    toast.error(message, {
      className: 'dark:bg-dark-surface dark:text-white',
    });
  },
  info: (message) => {
    toast.info(message, {
      className: 'dark:bg-dark-surface dark:text-white',
    });
  },
  warning: (message) => {
    toast.warning(message, {
      className: 'dark:bg-dark-surface dark:text-white',
    });
  },
}; 