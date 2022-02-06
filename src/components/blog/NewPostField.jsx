import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../Button';
import { getLocalStorage } from '../../utils/localStorage';
import { ThemeContext } from '../../context/ThemeProvider';

const NewPostField = ({ updatePostsData, id, postsList }) => {
  const { t } = useTranslation();

  const [postData, setPostData] = useState({});
  const [postValue, setPostValue] = useState('');
  const { subtheme } = useContext(ThemeContext);
  const posts = [...postsList];
  const user = getLocalStorage('authorizedUser');

  const handleChange = ({ target }) => {
    setPostData({
      id,
      user: user.name,
      value: target.value,
      login: user.login ? user.login : 'guest',
    });
    setPostValue(target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (postData.value && postData.value.length >= 3) {
      posts.splice(0, 0, postData);
      updatePostsData(posts);
      setPostValue('');
    } else {
      alert('Введите минимум 3 символа');
    }
  };

  return (
    <form className="blog__form">
      <textarea
        className={`blog__field ${subtheme}`}
        resize="none"
        maxLength={150}
        placeholder="New post..."
        onChange={handleChange}
        value={postValue}
      />
      <Button value={t('buttons.submit')} onClick={handleClick} />
    </form>
  );
};

export default NewPostField;
