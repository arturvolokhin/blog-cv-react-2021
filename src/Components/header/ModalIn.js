const ModalIn = ({toggle, toggleModal}) => {
    
    return(
        <article className={toggle ? "modal__in visible" : "modal__in"}>
            <div className="close" onClick={toggleModal}/>
            <h2 className="subtitle">Already Registered? Enter your data:</h2>
            <form className="modal__form">
                <input className="modal__login" type="login" placeholder="Login"/>
                <input className="modal__password" type="password" placeholder="Password"/>
                <button className="button">Submit</button>
            </form>
            <a className="modal__registration-link" href="#">
                <h2 className="subtitle">Not Registered? Click me</h2>
            </a>
        </article>
    )
}

export default ModalIn;