const Logout = ({setAuthorization}) => {
    return(
        <button className="login" onClick={() => setAuthorization(false)}>Logout</button>
    )
}

export default Logout;