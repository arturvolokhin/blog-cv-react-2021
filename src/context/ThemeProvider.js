import React, {useState} from 'react';

const ThemeContext = React.createContext();

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light');
    const [themeParams, setThemeParams] = useState({});

    const themeDark = {
        theme: 'dark',
        subtheme: 'gray',
        text: 'white',
        background: 'dark-background',
        button: 'button--dark'
    }

    const themeLight = {
        theme: 'light',
        subtheme: 'silver',
        text: 'black',
    }

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            setThemeParams(themeDark);
        } else {
            setTheme('light');
            setThemeParams(themeLight)
        }
    }

    return (
        <ThemeContext.Provider 
            value={
                {
                theme: themeParams.theme, 
                subtheme: themeParams.subtheme, 
                text: themeParams.text, 
                background: themeParams.background,
                button: themeParams.button,
                toggle: toggleTheme
                }
            } 
        >
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider};