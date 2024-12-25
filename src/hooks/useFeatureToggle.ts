export const useFeatureToggle = () => {
  const isChatbotEnabled = import.meta.env.VITE_CHATBOT_TOGGLE === 'true';
  return { isChatbotEnabled };
};
