const UserInfoMainEditField = ({name, onChange, placeholder}) => {

    return(
        <input 
            className="user__edit-field" placeholder={placeholder} 
            name={name} onChange={onChange}
        />
    )
}

export default UserInfoMainEditField;