import Home from './components/Home/Home';
import Chatbot from './components/Chatbot/Chatbot';
import { useFeatureToggle } from './hooks/useFeatureToggle';
import './App.css';

function App() {
  const { isChatbotEnabled, loading } = useFeatureToggle();

  return (
    <div className="app">
      <Home />
      {loading ? (
        <div className="feature-loading">Loading features...</div>
      ) : (
        isChatbotEnabled && <Chatbot />
      )}
    </div>
  );
}

export default App;
