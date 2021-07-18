import Button from '../Button'

const Login = ({toggleLoginModal}) => {

    return(
        <Button value={'Login'} onClick={toggleLoginModal}/>
    )
}

export default Login;