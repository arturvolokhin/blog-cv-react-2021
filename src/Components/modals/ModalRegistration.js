import React, { useState, useContext } from "react";
import { setLocalStorage, getLocalStorage } from "../api/localStorageApi";
import { ThemeContext } from '../../context/ThemeProvider';
import Button from '../Button';
import PropTypes from 'prop-types';

const ModalRegistration = ({isRegistrationModal, toggleRegistrationModal, toggleLoginModal}) => {

    const {theme, subtheme} = useContext(ThemeContext);
    
    const [userLogin, setUserLogin] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userName, setUserName] = useState('');
    
    const [loginError, setLoginError] = useState('Invalid login');
    const [passwordError, setPasswordError] = useState('Invalid password');
    const [nameError, setNameError] = useState('Invalid name');

    const [isLoginError, setIsLoginError] = useState(false);
    const [isPasswordError, setIsPasswordError] = useState(false);
    const [isNameError, setIsNameError] = useState(false);

    

    const getValidation = ({target}) => {
        const validation = /[A-Za-z0-9]{5,16}$/;
        const errorMessage = `Please enter at least 5 characters
            and only numbers and Latin letters`;
        
        switch(target.name) {
            case 'email':
                if (!target.value.match(validation)) {
                    setLoginError(errorMessage);
                    setIsLoginError(true);
                } else {
                    setIsLoginError(false);
                } break
            case 'password':
                if (!target.value.match(validation)) {
                    setPasswordError(errorMessage);
                    setIsPasswordError(true);
                } else {
                    setIsPasswordError(false);
                } break
            case 'name':
                if (!target.value.match(/[A-Za-z]{3,16}$/)) {
                    setNameError('Please enter at least 3 characters and only Latin letters');
                    setIsNameError(true);
                } else {
                    setIsNameError(false);
                }   
        }
    }
 

    const setUserRegDataToLocalStorage = () => {
        const userRegData = {login: userPassword, password: userPassword, name: userName};
        const data = getLocalStorage('usersRegData');
        data.push(userRegData);
        setLocalStorage('usersRegData', data);
    }

    const handleClick = (e) => {
        e.preventDefault();

        !localStorage.usersRegData && setLocalStorage('usersRegData', []);
        setUserRegDataToLocalStorage();
        
        setUserLogin('');
        setUserPassword('');
        setUserName('');
        toggleRegistrationModal()
        toggleLoginModal();
    }

    return(
        <article className={isRegistrationModal ? `modal visible ${theme}` : "modal"}>
            <a href="/"><div className="close"/></a>
            <h2 className="subtitle">Enter your data:</h2>
            
            <form className="modal__form">
                
                {isLoginError && <p style={{color: 'red'}}>{loginError}</p>}
                <input 
                    className={`modal__field ${subtheme}`} 
                    onChange={({target}) => setUserLogin(target.value)}
                    type="login" value={userLogin} placeholder="Login" maxLength="16"
                    onBlur={getValidation} name='email' autoFocus
                />
                
                {isPasswordError && <p style={{color: 'red'}}>{passwordError}</p>}
                <input 
                    className={`modal__field ${subtheme}`} 
                    onChange={({target}) => setUserPassword(target.value)}
                    type="password" value={userPassword} placeholder="Password" maxLength="16"
                    onBlur={getValidation} name="password"
                />
                
                {isNameError && <p style={{color: 'red'}}>{nameError}</p>}

                <input 
                    className={`modal__field ${subtheme}`} 
                    onChange={({target}) => setUserName(target.value)}
                    type="text" value={userName} placeholder="Your name" maxLength="16"
                    onBlur={getValidation} name="name"
                />
                {
                    !(isLoginError || isPasswordError || isNameError) &&
                        <Button value='Submit' onClick={handleClick}/> 
                }
            </form>
                
        </article>
    )
}

ModalRegistration.propTypes = {
    isRegistrationModal: PropTypes.bool,
    toggleLoginModal: PropTypes.func,
    toggleRegistrationModal: PropTypes.func,
};

export default ModalRegistration;
