import Button from '../Button'
import PropTypes from 'prop-types';
import { toggleLoginModal } from '../../redux/headerSlice';
import { useDispatch } from 'react-redux';

const Login = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleLoginModal())
    }

    return(
        <Button value={'Login'} onClick={handleClick}/>
    )
}

Login.propTypes = {
    toggleLoginModal: PropTypes.func,
};

export default Login;