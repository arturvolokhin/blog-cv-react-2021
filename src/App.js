import React from 'react';
import icon from './images/icons/icon.svg';
import avatar from './images/avatar.jpg';
import './style/main.css';
import './fonts/stylesheet.css';
import Title from './Components/header/Title';
import ThemeSwitch from './Components/header/ThemeSwitch';
import Login from './Components/header/Login';
import Avatar from './Components/user/Avatar';
import Status from './Components/post/Status';
import UserInfoMain from './Components/user/UserInfoMain';
import UserTechStack from './Components/user/UserTechStack';
import UserContacts from './Components/user/UserContacts';


const App = () => {
    return (
        <div className="wrapper">
            <header className="header">
                <Title icon={icon}/>
                <ThemeSwitch/>
                <Login/>
            </header>
            <main className="main">
                <section className="user">
                    <Avatar avatar={avatar}/>
                    <UserInfoMain/>
                    <UserTechStack/>
                    <UserContacts/>
                </section>

                <section className="post">
                    <Status/>
                    
                </section>
            </main>
        </div>
    )
}

export default App;