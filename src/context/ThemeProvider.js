import React, {useState} from 'react';

const ThemeContext = React.createContext();

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light');
    const [subTheme, setSubTheme] = useState('silver');
    const [textColor, setTextColor] = useState('black');
    const [background, setBackground] = useState('light-background')

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            setSubTheme('gray');
            setTextColor('white')
            setBackground('dark-background')
        } else {
            setTheme('light');
            setSubTheme('silver');
            setTextColor('black');
            setBackground('light-background');
        }
    }

    return (
        <ThemeContext.Provider 
            value={
                    {
                    theme: theme, 
                    subtheme: subTheme, 
                    text: textColor, 
                    background: background,
                    toggle: toggleTheme
                    }
                } 
        >
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider};