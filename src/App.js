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
import ModalIn from './Components/header/ModalIn';


const App = () => {

    const [toggle, setToggle] = useState(false);

    const toggleModal = () => setToggle(!toggle);

    return (
        <div className="wrapper">
            <header className="header">
                <Title icon={icon}/>
                
                <div className="header__params">
                    <Login toggleModal={toggleModal}/>
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
                <ModalIn toggle={toggle} toggleModal={toggleModal}/>
            </main>
        </div>
    )
}

export default App;