import Button from '../Button';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { logout } from '../../redux/authSlice'

const Logout = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(logout());
    }

    return(
        <Button onClick={handleClick} value={'Logout'}/>
    )
}

Logout.propTypes = {
    setAuthorization: PropTypes.func,
};

export default Logout;