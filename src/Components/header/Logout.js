import { setLocalStorage } from "../api/localStorageApi"
import Button from '../Button';

const Logout = ({ setAuthorization }) => {

    const handleClick = () => {
        setLocalStorage('authorizedUser', false);
        setAuthorization(false);
    }

    return(
        <Button onClick={handleClick} value={'Logout'}/>
    )
}

export default Logout;