import React, {useState} from 'react';

const { Provider, Consumer } = React.createContext();

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
        console.log(theme);
    }

    return (
        <Provider 
            value={{theme: theme, toggle: toggleTheme}} 
        >
            {children}
        </Provider>
    )
}

export { ThemeProvider, Consumer as ThemeContext };