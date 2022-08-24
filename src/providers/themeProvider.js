import { ThemeContext } from '../context/themeContext';
import { useState } from 'react';

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [toggled, setToggled] = useState(false);

  const toggleTheme = () => {
    setTheme((currTheme) => (currTheme === 'light' ? 'dark' : 'light'));
    setToggled((state) => !state);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, toggled }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
