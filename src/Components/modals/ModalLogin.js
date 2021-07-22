import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import Button from '../Button';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthorized } from '../../redux/authSlice';
import { toggleLoginModal, toggleRegistrationModal } from '../../redux/headerSlice';

const ModalLogin = () => {

    const [userLogin, setUserLogin] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const { theme, subtheme } = useContext(ThemeContext);
    const dispatch = useDispatch();
    const registeredUsers = useSelector(({auth}) => auth.registeredUsers);
    const isLoginModal = useSelector(({header}) => header.isLoginModal);

    const handleClick = (e) => {
        e.preventDefault();
        const check = registeredUsers.filter(user => {
            return user.login === userLogin && user.password === userPassword;
        });    
        check.length > 0 ? getAuthorization(...check) :
            alert('Вы ввели не верные данные');
        setUserLogin('');
        setUserPassword('');
        dispatch(toggleLoginModal())
    }

    const handleCloseModal = () => {
        dispatch(toggleLoginModal())
    }

    const handleRegistrationModal = () => {
        dispatch(toggleLoginModal());
        dispatch(toggleRegistrationModal())
    }

    const getAuthorization = ({login, password, name}) => {
        const authorizedUser = {
            login: login,
            password: password,
            name: name
        }
        
        dispatch(getAuthorized(authorizedUser));
    }

    return(
        <article className={isLoginModal ? `modal visible ${theme}` : "modal"}>
            <div className="close" onClick={handleCloseModal}/>
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
                    onClick={handleRegistrationModal}>Not Registered? Click me
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