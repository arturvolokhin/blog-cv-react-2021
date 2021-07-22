import './style/main.css';
import './fonts/stylesheet.css';
import React, { useContext } from 'react';
import Blog from './Components/blog/Blog';
import User from './Components/user/User';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Modals from './Components/modals/Modals';
import { ThemeContext } from "./context/ThemeProvider";

const App = () => {

    const { theme, background } = useContext(ThemeContext);

    return (
        <div className={`container ${background}`}>
            <div className={`wrapper ${theme}`}>
                <Header/>
                <main className="main">
                    <User/>
                    <Blog/>
                    <Modals/>
                </main>
                <Footer/>
            </div>  
        </div> 
    )
}

export default App;