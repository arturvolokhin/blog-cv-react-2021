import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import icon from '../../images/icons/icon.svg';
import ThemeSwitcher from './ThemeSwitcher';
import Logout from './Logout'
import Title from './Title';
import Login from './Login';
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ authorization, setAuthorization, toggleLoginModal }) => {

    const {theme} = useContext(ThemeContext);

    return(
        <header className={`header ${theme}`}>
            <Title icon={icon}/>         
            <div className="header__params">
            {authorization.login ? 
                <Logout 
                    setAuthorization={setAuthorization}
                /> : 
                <Login toggleLoginModal={toggleLoginModal}/>
            }
                <ThemeSwitcher/>
            </div>
        </header>
    )
}

Header.propTypes = {
    authorization: PropTypes.object,
    setAuthorization: PropTypes.func,
    toggleLoginModal: PropTypes.func,
};

export default Header;