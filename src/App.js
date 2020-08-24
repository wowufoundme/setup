import React, { useState, useEffect } from 'react';
import './App.css';

import ProfileImage from './components/ProfileImage';
import Lead from './components/Lead';
import Description from './components/Description';
import ThemeSwitcher from './components/ThemeSwitcher';

const App = () => {

  const [theme, setTheme] = useState('');

  const changeTheme = e => {
    if (theme === '') {
        setTheme('dark');
    } else {
        setTheme('');
    }
    document.documentElement.setAttribute("data-theme", theme);
  }

  useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
  })

  return (
    <div className="App">
      <div className="container">
        <ProfileImage />
        <Lead />
        <Description />
        <ThemeSwitcher theme={theme} changeTheme={changeTheme}/>
      </div>
    </div>
  );
}

export default App;
