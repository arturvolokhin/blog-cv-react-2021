import React, { useState, useContext, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../api/localStorageApi';
import { ThemeContext } from '../../context/ThemeProvider';
import Button from '../Button';
import PropTypes from 'prop-types';

const ModalLogin = ({isLoginModal, toggleLoginModal, toggleRegistrationModal, setAuthorization}) => {


    const [userLogin, setUserLogin] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const { theme, subtheme } = useContext(ThemeContext);

    useEffect(() => {
        toggleLoginModal();
    }, []);

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
            toggleLoginModal();
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

    const registrationClick = () => {
        toggleLoginModal();
        toggleRegistrationModal();
    }


    return(
        <article className={isLoginModal ? `modal visible ${theme}` : "modal"}>
            <a href="/"><div className="close"/></a>
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
                <h2 className="subtitle modal__registration-link" 
                    onClick={registrationClick}>Not Registered? Click me
                </h2>
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