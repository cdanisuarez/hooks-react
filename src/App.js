import React, { useState } from 'react';
import Header from './components/Header/Header';
import Characters from './components/Characters/Characters';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleIsDarkMode = (isDarkMode) => setIsDarkMode(isDarkMode);

  return (
    <div className={`app--${isDarkMode ? 'dark' : 'light'}`}>
      <Header handleDarkMode={handleIsDarkMode} />
      <Characters />
    </div>
  );
}

export default App;
