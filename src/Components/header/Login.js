import Button from '../Button'
import PropTypes from 'prop-types';

const Login = ({toggleLoginModal}) => {

    return(
        <a href="/auth"><Button value={'Login'}/></a>
    )
}

Login.propTypes = {
    toggleLoginModal: PropTypes.func,
};

export default Login;