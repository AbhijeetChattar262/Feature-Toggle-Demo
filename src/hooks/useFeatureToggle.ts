import { useState, useEffect } from 'react';

export const useFeatureToggle = () => {
  const [isChatbotEnabled, setIsChatbotEnabled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatureFlags = async () => {
      try {
        const response = await fetch('https://api.jsonbin.io/v3/b/676bd35aacd3cb34a8bf1dec', {
          headers: {
            'X-Master-Key': import.meta.env.VITE_JSONBIN_API_KEY,
            'X-Access-Key': import.meta.env.VITE_JSONBIN_ACCESS_KEY
          }
        });
        const data = await response.json();
        setIsChatbotEnabled(data.record.features.chatbot.enabled);
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
