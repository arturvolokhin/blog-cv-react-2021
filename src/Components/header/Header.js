import { ThemeContext } from '../../context/ThemeProvider';
import icon from '../../images/icons/icon.svg';
import ThemeSwitcher from './ThemeSwitcher';
import Logout from './Logout'
import Title from './Title';
import Login from './Login';
import React from 'react';

const Header = ({ authorization, setAuthorization, toggleLoginModal }) => {
    return(
        <ThemeContext>
            {context => (
                <header className={`header ${context.theme}`}>
                    <Title icon={icon}/>         
                    <div className="header__params">
                    {authorization ? 
                        <Logout 
                            setAuthorization={setAuthorization}
                        /> : 
                        <Login toggleLoginModal={toggleLoginModal}/>
                    }
                        <ThemeSwitcher/>
                    </div>
                </header>
            )}
        </ThemeContext>
    )
}

export default Header;