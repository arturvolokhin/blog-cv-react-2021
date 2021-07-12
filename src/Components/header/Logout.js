import { setLocalStorage } from "../api/localStorageApi"

const Logout = ({setAuthorization}) => {

    const handleClick = () => {
        setLocalStorage('authorizedUser', false);
        setAuthorization(false);
    }

    return(
        <button className="login" onClick={handleClick}>Logout</button>
    )
}

export default Logout;