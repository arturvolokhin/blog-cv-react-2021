import React from 'react';
import Title from './Components/header/Title';
import icon from './images/icons/icon.svg';
import ThemeSwitch from './Components/header/ThemeSwitch';
import Login from './Components/header/Login';
import './style/main.css';
import './fonts/stylesheet.css';

const App = () => {
    return (
        <div className="wrapper">
            <header className="header">
                <Title icon={icon}/>
                <ThemeSwitch/>
                <Login/>
            </header>
        </div>
    )
}

export default App;