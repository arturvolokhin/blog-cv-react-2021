import React, { useState, useContext, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../api/localStorageApi';
import { ThemeContext } from '../../context/ThemeProvider';
import Button from '../Button';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const ModalLogin = ({ setAuthorization }) => {


    const [userLogin, setUserLogin] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const { theme, subtheme } = useContext(ThemeContext);


    const handleClick = (e) => {
        e.preventDefault();
        const usersData = getLocalStorage('usersRegData');
        const check = usersData.filter(user => {
            return user.login === userLogin && user.password === userPassword;
        });    
        check.length > 0 ? getAuthorization(...check) :
            alert('Вы ввели не верные данные');
            setUserLogin('');
            setUserPassword('');
    }

    const getAuthorization = ({login, password, name}) => {
        const authorizedUser = {
            login: login,
            password: password,
            name: name
        }
        setLocalStorage('authorizedUser', authorizedUser)
        setAuthorization(authorizedUser);
    }



    return(
        <article className={`modal ${theme}`}>
            <Link to="/"><div className="close"/></Link>
            <h2 className="subtitle">Already Registered? Enter your data:</h2>
            <form className="modal__form">
                <input 
                    className={`modal__field ${subtheme}`} 
                    onChange={({target}) => setUserLogin(target.value)}
                    type="login" value={userLogin} placeholder="Login" maxLength="16" autoFocus
                />
                <input 
                    className={`modal__field ${subtheme}`} 
                    onChange={({target}) => setUserPassword(target.value)}
                    type="password" value={userPassword} placeholder="Password" maxLength="16"
                />
                <Button value="Submit" onClick={handleClick}/>
            </form>
                <Link to="/registration">
                    <h2 className="subtitle modal__registration-link">
                        Not Registered? Click me
                    </h2>
                </Link>
        </article>
    )
}

ModalLogin.propTypes = {
    isLoginModal: PropTypes.bool,
    toggleLoginModal: PropTypes.func,
    toggleRegistrationModal: PropTypes.func,
    setAuthorization: PropTypes.func,
};

export default ModalLogin;