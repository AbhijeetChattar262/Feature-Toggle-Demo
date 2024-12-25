import Home from './components/Home/Home';
import Chatbot from './components/Chatbot/Chatbot';
import { useFeatureToggle } from './hooks/useFeatureToggle';
import './App.css';

function App() {
  const { isChatbotEnabled } = useFeatureToggle();

  return (
    <div className="app">
      <Home />
      {isChatbotEnabled && <Chatbot />}
    </div>
  );
}

export default App;
