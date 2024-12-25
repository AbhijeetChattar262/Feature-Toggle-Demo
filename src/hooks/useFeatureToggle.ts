import { useState, useEffect } from 'react';

export const useFeatureToggle = () => {
  const [isChatbotEnabled, setIsChatbotEnabled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatureFlags = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_JSONBIN_BIN_URL, {
          headers: {
            'X-Master-Key': import.meta.env.VITE_JSONBIN_API_KEY,
            'X-Access-Key': import.meta.env.VITE_JSONBIN_ACCESS_KEY
          }
        });
        const data = await response.json();
        setIsChatbotEnabled(data.record.chatbotFeatureToggle);
        console.log('Feature flags fetched:', data);
        
      } catch (error) {
        console.error('Error fetching feature flags:', error);
        setIsChatbotEnabled(false);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatureFlags();
    // Polling every 30 seconds to check for updates
    // const interval = setInterval(fetchFeatureFlags, 30000);
    // return () => clearInterval(interval);
  }, []);

  return { isChatbotEnabled, loading };
};
