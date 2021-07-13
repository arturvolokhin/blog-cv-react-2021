const UserContacts = () => {
    return(
        <article className="section user__contacts">
            <h2 className="subtitle">My contacts:</h2>
            <ul className="user__contacts-content">
                <li className="user__contacts-item">
                    <a href="https://vk.com/arturvolokhin97" target="_blank">arturvolokhin97</a>
                </li>

                <li className="user__contacts-item">
                    <a href="https://github.com/arturvolokhin" target="_blank">arturvolokhin</a>
                </li>

                <li className="user__contacts-item">
                    <a href="https://github.com/arturvolokhin" target="_blank">arturvolokhin</a>
                </li>

                <li className="user__contacts-item">
                    <a href="mailto:artur.volokhin@mail.ru">artur.volokhin@mail.ru</a>
                </li>
            </ul>
        </article>
    )
}

export default UserContacts;