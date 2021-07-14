import React, {useState, useEffect} from "react";

const UserInfoMainEditField = ({name, onChange, placeholder, text}) => {

    const [value, setValue] = useState('');
   
    useEffect(() => {
        setValue(text);
    }, [text]);

    const handleChange = ({target}) => {
        setValue(target.value);
        console.log(target.value)
    }

    const handleBlur = ({target}) => {
        onChange(target)
    }

    return(
        <input 
            className="user__edit-field" placeholder={placeholder} 
            name={name} onChange={handleChange} onBlur={handleBlur} value={value}
            autoComplete="off"
        />
    )
}

export default UserInfoMainEditField;