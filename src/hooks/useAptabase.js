import { useEffect } from 'react';
import { init } from '@aptabase/web';

export const useAptabase = () => {
  useEffect(() => {
    // Only initialize on the client side
    if (typeof window !== 'undefined') {
      init('YOUR_APTABASE_APP_KEY', {
        // Optional configuration
        host: 'https://us.aptabase.com', // or your region-specific endpoint
        isDebug: process.env.NODE_ENV !== 'production', // Enable debug logs in development
      });
    }
  }, []);
};