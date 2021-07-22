import React, { useState, useContext } from "react";
import "./style/main.css";
import "./fonts/stylesheet.css";
import Blog from "./Components/blog/Blog";
import User from "./Components/user/User";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import Modals from "./Components/modals/Modals";
import { ThemeContext } from "./context/ThemeProvider";
import { getLocalStorage } from "./Components/api/localStorageApi";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
    const [authorization, setAuthorization] = useState(
        getLocalStorage("authorizedUser")
    );

    const { theme, background } = useContext(ThemeContext);

    return (
        <div className={`container ${background}`}>
            <div className={`wrapper ${theme}`}>
                <Header
                    authorization={authorization}
                    setAuthorization={setAuthorization}
                />
                <main className="main">
                    <User authorization={authorization} />
                    <Blog authorization={authorization} />
                    <Modals
                        setAuthorization={setAuthorization}
                    />
                </main>

                <Route path="/footer" component={Footer} />
            </div>
        </div>
    );
};

export default App;
