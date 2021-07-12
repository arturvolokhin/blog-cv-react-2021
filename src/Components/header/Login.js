import Button from '../Button'

const Login = ({toggleLogin}) => {

    return(
        <Button value={'Login'} onClick={toggleLogin}/>
    )
}

export default Login;