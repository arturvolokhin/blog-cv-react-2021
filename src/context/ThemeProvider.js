import React, {useState} from 'react';

const { Provider, Consumer } = React.createContext();

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
        <Provider 
            value={
                {
                    theme: theme, 
                    subtheme: subTheme, 
                    text: textColor, 
                    background: background,
                    toggle: toggleTheme}} 
        >
            {children}
        </Provider>
    )
}

export { ThemeProvider, Consumer as ThemeContext }