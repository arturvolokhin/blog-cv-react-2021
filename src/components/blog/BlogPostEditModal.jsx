import React, { useState, useContext } from 'react';
import iconAdmin from '../../images/iconAdmin.jpg';
import iconGuest from '../../images/iconGuest.svg';
import iconUser from '../../images/iconUser.png';
import { ThemeContext } from '../../context/ThemeProvider';

const BlogPostEditModal = ({ post, posts, date, toggleEditModal, id, updatePostsData }) => {
  const [text, setText] = useState(post.value);
  const { theme, subtheme } = useContext(ThemeContext);

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  const handleClick = () => {
    const index = posts.findIndex((item) => item.id === id);
    if (index !== -1) {
      post.value = text;
      posts.splice(index, 1, post);
      updatePostsData(posts);
      toggleEditModal(false);
    } else {
      toggleEditModal(false);
      alert('Редактируемый пост удалён!');
    }
  };

  return (
    <div className={`post__modal ${theme}`}>
      <div className="post__modal-content">
        <img
          className="post__modal-icon"
          alt="Post user icon"
          src={post.user === 'Artur Volokhin' ? iconAdmin : post.user ? iconUser : iconGuest}
        />
        <div className="post__modal-header">
          <span className="post__modal-user">{post.user ? post.user : 'Guest'}</span>
          <span>{date}</span>
        </div>
        <textarea
          className={`post__modal-message ${subtheme}`}
          value={text}
          onChange={handleChange}
          // autoFocus
        />
        <div className={`post__modal-submit ${theme}`} role="presentation" onClick={handleClick} />
        <div
          className={`post__modal-cancel ${theme}`}
          role="presentation"
          onClick={() => toggleEditModal(false)}
        />
      </div>
    </div>
  );
};

export default BlogPostEditModal;
