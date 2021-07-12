import { setLocalStorage } from "../api/localStorageApi"
import Button from '../Button';

const Logout = ({setAuthorization, setUserInfoMainEdit}) => {

    const handleClick = () => {
        setLocalStorage('authorizedUser', false);
        setAuthorization(false);
        setUserInfoMainEdit(false);
    }

    return(
        <Button onClick={handleClick} value={'Logout'}/>
    )
}

export default Logout;