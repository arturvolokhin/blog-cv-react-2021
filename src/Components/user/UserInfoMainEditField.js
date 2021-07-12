const UserInfoMainEditField = ({name, value}) => {
    return(
        <input className="user__edit-field" placeholder={name} value={value}/>
    )
}

export default UserInfoMainEditField;