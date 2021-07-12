import React, {useState} from 'react';
import { getLocalStorage, setLocalStorage } from '../api/localStorageApi';

const ModalLogin = ({toggle, toggleLogin, toggleRegistration, setAuthorization}) => {

    const [userLogin, setUserLogin] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        const usersData = getLocalStorage('usersRegData');
        const check = usersData.filter(user => user.login === userLogin && user.password === userPassword);
        check.length > 0 ? getAuthorization(...check) : alert('Вы ввели не верные данные');
        setUserLogin('');
        setUserPassword('');
        toggleLogin();
    }

    const getAuthorization = ({login, password}) => {
        setAuthorization({login: login, password: password});
    }

    const registrationClick = () => {
        toggleLogin();
        toggleRegistration();
    }


    return(
        <article className={toggle ? "modal visible" : "modal"}>
            <div className="close" onClick={toggleLogin}/>
            <h2 className="subtitle">Already Registered? Enter your data:</h2>
            <form className="modal__form">
                <input 
                    className="modal__field" onChange={({target}) => setUserLogin(target.value)}
                    type="login" value={userLogin} placeholder="Login" maxLength="16"
                />
                <input 
                    className="modal__field" onChange={({target}) => setUserPassword(target.value)}
                    type="password" value={userPassword} placeholder="Password" maxLength="16"
                />
                <button className="button" onClick={handleClick}>Submit</button>
            </form>
                <h2 className="subtitle modal__registration-link" 
                    onClick={registrationClick}>Not Registered? Click me
                </h2>
        </article>
    )
}

export default ModalLogin;