import Button from '../Button'
import PropTypes from 'prop-types';

const Login = ({toggleLoginModal}) => {

    return(
        <Button value={'Login'} onClick={toggleLoginModal}/>
    )
}

Login.propTypes = {
    toggleLoginModal: PropTypes.func,
};

export default Login;