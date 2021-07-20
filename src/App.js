import './style/main.css';
import './fonts/stylesheet.css';
import React,{ useState, useContext } from 'react';
import Blog from './Components/blog/Blog';
import User from './Components/user/User';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Modals from './Components/modals/Modals';
import { ThemeContext } from "./context/ThemeProvider";
import { getLocalStorage } from './Components/api/localStorageApi';

const App = () => {

    const [authorization, setAuthorization] = useState(getLocalStorage('authorizedUser'));
    const [isLoginModal, setIsLoginModal] = useState(false);
    const { theme, background } = useContext(ThemeContext);

    const toggleLoginModal = () => {
        setIsLoginModal(!isLoginModal);
    } 

    return (
        <div className={`container ${background}`}>
            <div className={`wrapper ${theme}`}>
                <Header
                    authorization={authorization}
                    toggleLoginModal={toggleLoginModal}                      
                    setAuthorization={setAuthorization}
                />
                <main className="main">
                    <User authorization={authorization}/>
                    <Blog authorization={authorization}/>
                    <Modals 
                        isLoginModal={isLoginModal}
                        toggleLoginModal={toggleLoginModal}
                        setAuthorization={setAuthorization}
                    />
                </main>
                <Footer/>
            </div>  
        </div> 
    )
}

export default App;