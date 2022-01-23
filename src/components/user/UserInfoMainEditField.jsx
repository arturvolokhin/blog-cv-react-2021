import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';

const UserInfoMainEditField = ({ name, saveValue, placeholder, text }) => {
  const [value, setValue] = useState(text);
  const { subtheme } = useContext(ThemeContext);

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleBlur = ({ target }) => {
    saveValue(target);
  };

  const handleKeyPress = ({ target, key }) => (key === 'Enter' ? target.blur() : null);

  return (
    <input
      className={`user__edit-field ${subtheme}`}
      placeholder={placeholder}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
      onKeyPress={handleKeyPress}
      autoComplete="off"
    />
  );
};

export default UserInfoMainEditField;
