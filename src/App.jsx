import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './sass/main.sass';
import './fonts/stylesheet.css';
import Blog from './components/blog/Blog';
import User from './components/user/User';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Modals from './components/modals/Modals';
import { ThemeContext } from './context/ThemeProvider';
import { getLocalStorage } from './utils/localStorage';

const App = () => {
  const navigate = useNavigate();
  const { lang } = useParams();

  const [authorization, setAuthorization] = useState(getLocalStorage('authorizedUser'));
  const [isLoginModal, setIsLoginModal] = useState(false);
  const { theme, background } = useContext(ThemeContext);
  const activeLanguage = getLocalStorage('lang');

  const toggleLoginModal = () => {
    setIsLoginModal(!isLoginModal);
  };

  window.addEventListener('load', async () => {
    if (navigator.serviceWorker) {
      try {
        console.log('navigator is there');
        navigator.serviceWorker.register('./serviceWorkers.js');
      } catch (e) {
        console.log('Service worker register fail');
      }
    }
  });

  useEffect(() => {
    navigate(lang ?? activeLanguage);
  }, []);

  return (
    <div className={`container ${background}`}>
      <div className={`wrapper ${theme}`}>
        <Header
          authorization={authorization}
          toggleLoginModal={toggleLoginModal}
          setAuthorization={setAuthorization}
        />
        <main className="main">
          <User authorization={authorization} />
          <Blog authorization={authorization} />
          <Modals
            isLoginModal={isLoginModal}
            toggleLoginModal={toggleLoginModal}
            setAuthorization={setAuthorization}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
