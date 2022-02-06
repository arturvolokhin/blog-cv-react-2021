import React, { useState, useMemo } from 'react';

const ThemeContext = React.createContext({
  theme: '',
  subtheme: '',
  text: '',
  background: '',
  button: '',
  toggle: () => null,
});

const ThemeProvider = ({ children }) => {
  const themeDark = {
    theme: 'dark',
    subtheme: 'gray',
    text: 'white',
    background: 'dark-background',
    button: 'button--dark',
  };

  const themeLight = {
    theme: 'light',
    subtheme: 'silver',
    text: 'black',
    background: 'light-background',
  };

  const [theme, setTheme] = useState('dark');
  const [themeParams, setThemeParams] = useState(themeDark);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setThemeParams(themeDark);
    } else {
      setTheme('light');
      setThemeParams(themeLight);
    }
  };

  const contextValues = useMemo(
    () => ({
      theme: themeParams.theme,
      subtheme: themeParams.subtheme,
      text: themeParams.text,
      background: themeParams.background,
      button: themeParams.button,
      toggle: toggleTheme,
    }),
    [themeParams],
  );

  return <ThemeContext.Provider value={contextValues}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
