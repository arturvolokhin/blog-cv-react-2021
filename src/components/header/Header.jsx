import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import icon from '../../images/icons/icon.svg';
import ThemeSwitcher from './ThemeSwitcher';
import Logout from './Logout';
import Title from './Title';
import Login from './Login';
import LangList from './LangSwitcher';

const Header = ({ authorization, setAuthorization, toggleLoginModal }) => {
  const { theme } = useContext(ThemeContext);
  console.log(theme, 'theme header');
  return (
    <header className={`header ${theme}`}>
      <Title icon={icon} />
      <div className="header__params">
        {authorization.login ? (
          <Logout setAuthorization={setAuthorization} />
        ) : (
          <Login toggleLoginModal={toggleLoginModal} />
        )}
        <LangList />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
