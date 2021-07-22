import './style/main.css';
import './fonts/stylesheet.css';
import React,{ useState, useContext } from 'react';
import Blog from './Components/blog/Blog';
import User from './Components/user/User';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Modals from './Components/modals/Modals';
import { ThemeContext } from "./context/ThemeProvider";

const App = () => {

    const [isLoginModal, setIsLoginModal] = useState(false);
    const { theme, background } = useContext(ThemeContext);

    const toggleLoginModal = () => {
        setIsLoginModal(!isLoginModal);
    } 

    return (
        <div className={`container ${background}`}>
            <div className={`wrapper ${theme}`}>
                <Header
                    toggleLoginModal={toggleLoginModal}                      
                />
                <main className="main">
                    <User/>
                    <Blog/>
                    <Modals 
                        isLoginModal={isLoginModal}
                        toggleLoginModal={toggleLoginModal}
                    />
                </main>
                <Footer/>
            </div>  
        </div> 
    )
}

export default App;