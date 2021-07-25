import './style/main.css';
import './fonts/stylesheet.css';
import React, { useContext } from 'react';
import Blog from './components/blog/Blog';
import User from './components/user/User';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Modals from './components/modals/Modals';
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