import React,{useState} from 'react';
import icon from './images/icons/icon.svg';
import avatar from './images/avatar.jpg';
import './style/main.css';
import './fonts/stylesheet.css';
import Title from './Components/header/Title';
import ThemeSwitcher from './Components/header/ThemeSwitcher';
import Login from './Components/header/Login';
import Avatar from './Components/user/Avatar';
import Status from './Components/post/Status';
import UserInfoMain from './Components/user/UserInfoMain';
import UserTechStack from './Components/user/UserTechStack';
import UserContacts from './Components/user/UserContacts';
import NewPost from './Components/post/NewPost';
import ModalLogin from './Components/header/ModalLogin';
import ModalRegistration from './Components/header/ModalRegistration';
// import { setLocalStorage, getLocalStorage } from './Components/api/localStorageApi';

const App = () => {

    const [toggleLoginModal, setToggleLoginModal] = useState(false);
    const [toggleRegistrationModal, setToggleRegistrationModal] = useState(false);
    const [authorization, setAuthorization] = useState({});

    const toggleLogin = () => setToggleLoginModal(!toggleLoginModal);
    const toggleRegistration = () => setToggleRegistrationModal(!toggleRegistrationModal);


    return (
        <div className="wrapper">
            <header className="header">
                <Title icon={icon}/>
                
                <div className="header__params">
                    <Login toggleLogin={toggleLogin}/>
                    <ThemeSwitcher/>
                </div>
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
                    <NewPost/>
                </section>
                <ModalLogin 
                    toggle={toggleLoginModal} 
                    toggleLogin={toggleLogin}
                    toggleRegistration={toggleRegistration}
                    setAuthorization={setAuthorization}
                />
                <ModalRegistration
                    toggle={toggleRegistrationModal} 
                    toggleRegistration={toggleRegistration}
                    toggleLogin={toggleLogin}
                />
            </main>
        </div>
    )
}

export default App;