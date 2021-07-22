import Button from '../Button'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Login = () => {

    return(
        <Link to="/auth"><Button value={'Login'}/></Link>
    )
}

export default Login;