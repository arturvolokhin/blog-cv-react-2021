import React,{useState} from "react";
import { setLocalStorage, getLocalStorage } from "../api/localStorageApi";

const ModalRegistration = ({toggle, toggleRegistration, toggleLogin}) => {
    
    const [userLogin, setUserLogin] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userName, setUserName] = useState('');

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
        toggleRegistration()
        toggleLogin();
    }

    return(
        <article className={toggle ? "modal visible" : "modal"}>
            <div className="close" onClick={toggleRegistration}/>
            <h2 className="subtitle">Enter your data:</h2>
            
            <form className="modal__form">
                <input 
                    className="modal__field" onChange={({target}) => setUserLogin(target.value)}
                    type="login" value={userLogin} placeholder="Login" maxLength="16"
                />
                <input 
                    className="modal__field" onChange={({target}) => setUserPassword(target.value)}
                    type="password" value={userPassword} placeholder="Password" maxLength="16"
                />
                <input 
                    className="modal__field" onChange={({target}) => setUserName(target.value)}
                    type="text" value={userName} placeholder="Your name" maxLength="16"
                />
                <button className="button" onClick={handleClick}>Submit</button>
            </form>
                
        </article>
    )
}

export default ModalRegistration;
