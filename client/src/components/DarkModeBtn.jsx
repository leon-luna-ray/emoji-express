import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const DarkModeBtn = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div
      className='dark-mode-btn'
      onClick={() => setDarkMode((prevDarkMode) => !prevDarkMode)}
      style={{
        background: darkMode ? '#333' : '#fff',
        color: darkMode ? 'white' : 'black',
      }}
    >
      {darkMode ? 'Light ⬜️' : 'Dark ⬛️'}
    </div>
  );
};

export default DarkModeBtn;
