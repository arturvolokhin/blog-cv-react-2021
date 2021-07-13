import React,{useState} from 'react';
import icon from './images/icons/icon.svg';
import avatar from './images/avatar.jpg';
import './style/main.css';
import './fonts/stylesheet.css';
import Title from './Components/header/Title';
import ThemeSwitcher from './Components/header/ThemeSwitcher';
import Login from './Components/header/Login';
import Logout from './Components/header/Logout'
import Avatar from './Components/user/Avatar';
import Status from './Components/post/Status';
import UserInfoMain from './Components/user/UserInfoMain';
import UserTechStack from './Components/user/UserTechStack';
import UserContacts from './Components/user/UserContacts';
import NewPostField from './Components/post/NewPostField';
import ModalLogin from './Components/header/ModalLogin';
import ModalRegistration from './Components/header/ModalRegistration';
import UserInfoMainEdit from './Components/user/UserInfoMainEdit';
import PostsWall from './Components/post/PostsWall';
import { getLocalStorage, setLocalStorage } from './Components/api/localStorageApi';

const App = () => {

    const [toggleLoginModal, setToggleLoginModal] = useState(false);
    const [toggleRegistrationModal, setToggleRegistrationModal] = useState(false);
    const [authorization, setAuthorization] = useState(getLocalStorage('authorizedUser'));
    const [status, setStatus] = useState(getLocalStorage('status'));
    const [userInfoMainEdit, setUserInfoMainEdit] = useState(false);
    const [newPost, setNewPost] = useState('');
    // setLocalStorage('posts', [{name: 'Artur', value: 'Hello, its my first post in my app, wich i develops myself!)))'}])

    const toggleLogin = () => {
        setToggleLoginModal(!toggleLoginModal);
    }    
    
    const toggleRegistration = () => {
        setToggleRegistrationModal(!toggleRegistrationModal);
    }    
    
    const toggleUserInfoEdit = () => {
        authorization && setUserInfoMainEdit(!userInfoMainEdit);
    }

    return (
        <div className="wrapper">
            <header className="header">
                <Title icon={icon}/>
                
                <div className="header__params">
                {authorization ? 
                    <Logout 
                        setAuthorization={setAuthorization}
                        setUserInfoMainEdit={setUserInfoMainEdit}
                    /> : 
                    <Login toggleLogin={toggleLogin}/>
                }
                    <ThemeSwitcher/>
                </div>
            </header>
            <main className="main">
                <section className="user">
                    <Avatar avatar={avatar}/>
                    <UserInfoMain 
                        toggleUserInfoEdit={toggleUserInfoEdit}
                        authorization={authorization}
                    />
                    <UserTechStack/>
                    <UserContacts/>
                    {userInfoMainEdit && authorization ? 
                        <UserInfoMainEdit toggleUserInfoEdit={toggleUserInfoEdit}/> : 
                        null
                    }
                </section>

                <section className="post">
                    <Status authorization={authorization} status={status} setStatus={setStatus}/>
                    <NewPostField setNewPost={setNewPost}/>
                    <PostsWall setNewPost={setNewPost}/>
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