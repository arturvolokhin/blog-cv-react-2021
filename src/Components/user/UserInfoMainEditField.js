import React, { useState, useContext } from "react";
import { ThemeContext } from '../../context/ThemeProvider';
import PropTypes from 'prop-types';


const UserInfoMainEditField = ({name, saveValue, placeholder, text}) => {

    const [value, setValue] = useState(text);
    const {subtheme} = useContext(ThemeContext);

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
            className={`user__edit-field ${subtheme}`} placeholder={placeholder} 
            name={name} onChange={handleChange} onBlur={handleBlur} value={value}
            onKeyPress={handleKeyPress} autoComplete="off"
        />
    )
}

UserInfoMainEditField.propTypes = {
    name: PropTypes.string,
    saveValue: PropTypes.object,
    placeholder: PropTypes.string,
    text: PropTypes.string,
};

export default UserInfoMainEditField;