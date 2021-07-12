const UserInfoMainField = ({name, value}) => {
    return(
        <li className="user__info-item">
            <span>{name}</span> <span className="user__info-item--data">{value}</span>
        </li>
    )
}

export default UserInfoMainField;