import React, { useState, useContext } from 'react';
import UserInfoMainEditField from './UserInfoMainEditField';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';
import { ThemeContext } from '../../context/ThemeProvider';

const UserInfoMainEdit = ({ toggleUserInfoEdit }) => {
  const data = getLocalStorage('userInfo');
  const [text, setText] = useState(data);
  const { theme, subtheme } = useContext(ThemeContext);

  const handleChange = (target) => {
    setText({ ...text, [target.name]: target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setLocalStorage('userInfo', text);
    toggleUserInfoEdit();
  };

  return (
    <form className={`user__edit ${subtheme}`}>
      {Object.entries(data).map(([key, value]) => (
        <UserInfoMainEditField
          key={key}
          name={key}
          placeholder={key}
          saveValue={handleChange}
          text={value}
        />
      ))}

      <div className="user__edit-buttons">
        <div className={`post__modal-submit ${theme}`} role="presentation" onClick={handleClick} />
        <div
          className={`post__modal-cancel ${theme}`}
          role="presentation"
          onClick={toggleUserInfoEdit}
        />
      </div>
    </form>
  );
};

export default UserInfoMainEdit;
