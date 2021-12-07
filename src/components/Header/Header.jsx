import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './Header.css';

const Header = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const handleClick = () => setIsDarkMode(!isDarkMode);

  return (
    <header className="header">
      <h1 className="header__title">Rick & Morty</h1>
      <button className={`header__button header__button--${isDarkMode ? 'dark' : 'light'}`} type="button" onClick={handleClick}>
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  );
}

export default Header;
