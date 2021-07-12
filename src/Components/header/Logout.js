import { setLocalStorage } from "../api/localStorageApi"

const Logout = ({setAuthorization, setUserInfoMainEdit}) => {

    const handleClick = () => {
        setLocalStorage('authorizedUser', false);
        setAuthorization(false);
        setUserInfoMainEdit(false);
    }

    return(
        <button className="login" onClick={handleClick}>Logout</button>
    )
}

export default Logout;