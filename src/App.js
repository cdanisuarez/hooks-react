import React, { useContext } from 'react';

import { ThemeContext } from './context/ThemeContext';

import Header from './components/Header/Header';
import Characters from './components/Characters/Characters';
import './App.css';

const App = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`app--${isDarkMode ? 'dark' : 'light'}`}>
      <Header />
      <Characters />
    </div>
  );
}

export default App;
