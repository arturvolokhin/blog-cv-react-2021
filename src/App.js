import React from 'react';
import Title from './Components/header/Title';
import icon from './images/icons/icon.svg';
import './style/main.css';

const App = () => {
    return (
        <div className="wrapper">
            <header className="header">
                <Title icon={icon}/>
            </header>
        </div>
    )
}

export default App;