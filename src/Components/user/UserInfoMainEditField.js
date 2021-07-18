import React, {useState} from "react";
import { ThemeContext } from '../../context/ThemeProvider';


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
        <ThemeContext>
            {context => (
                <input 
                    className={`user__edit-field ${context.subtheme}`} placeholder={placeholder} 
                    name={name} onChange={handleChange} onBlur={handleBlur} value={value}
                    onKeyPress={handleKeyPress} autoComplete="off"
                />
            )}
        </ThemeContext>
    )
}

export default UserInfoMainEditField;