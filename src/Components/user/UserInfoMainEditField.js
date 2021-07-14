import React, {useState} from "react";

const UserInfoMainEditField = ({name, saveValue, placeholder, text}) => {

    const [value, setValue] = useState(text);

    const handleChange = ({target}) => {
        setValue(target.value);
    }

    const handleBlur = ({target}) => {
        saveValue(target)
    }

    const handleKeyPress = ({target, key}) => {
        return key === 'Enter' ? target.blur() : null;
    }

    return(
        <input 
            className="user__edit-field" placeholder={placeholder} 
            name={name} onChange={handleChange} onBlur={handleBlur} value={value}
            onKeyPress={handleKeyPress} autoComplete="off"
        />
    )
}

export default UserInfoMainEditField;