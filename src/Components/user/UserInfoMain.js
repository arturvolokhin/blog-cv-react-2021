const UserInfoMain = () => {
    return(
        <article>
            <ul className="user__info">
                <li className="user__info-item user__info-item--login"><span>Login:</span> <span>artur_volokhin</span></li>
                <li className="user__info-item user__info-item--name"><span>Name:</span> <span>Artur Volokhin</span></li>
                <li className="user__info-item user__info-item--birthday"><span>Birthday:</span> <span>20.11.1997</span></li>
                <li className="user__info-item user__info-item--location"><span>Live to:</span> <span>Minsk, Belarus</span></li>
            </ul>
        </article>
    )
}

export default UserInfoMain;