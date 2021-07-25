import React, { useState, useContext } from "react";
import iconAdmin from "../../images/iconAdmin.jpg";
import iconGuest from "../../images/iconGuest.svg";
import iconUser from "../../images/iconUser.png";
import { ThemeContext } from "../../context/ThemeProvider";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { editPost } from "../../redux/blogSlice";

const BlogPostEditModal = ({ post, posts, date, toggleEditModal, id }) => {
    const [text, setText] = useState(post.value);
    const { theme, subtheme } = useContext(ThemeContext);
    const dispatch = useDispatch();

    const handleChange = ({ target }) => setText(target.value);
    

    const handleClick = () => {
        const index = posts.findIndex((post) => post.id === id);
        if (index !== -1) {
            dispatch(editPost({ text: text, index: index }));
            toggleEditModal(false);
        } else {
            toggleEditModal(false);
            alert("Редактируемый пост удалён!");
        }
    };

    return (
        <div className={`post__modal ${theme}`}>
            <div className="post__modal-content">
                <img
                    className="post__modal-icon"
                    alt="Post user icon"
                    src={
                        post.user === "Artur Volokhin"
                            ? iconAdmin
                            : post.user
                            ? iconUser
                            : iconGuest
                    }
                />
                <div className="post__modal-header">
                    <span className="post__modal-user">
                        {post.user ? post.user : "Guest"}
                    </span>
                    <span>{date}</span>
                </div>
                <textarea
                    className={`post__modal-message ${subtheme}`}
                    value={text}
                    onChange={handleChange}
                    autoFocus
                />
                <div
                    className={`post__modal-submit ${theme}`}
                    onClick={handleClick}
                />
                <div
                    className={`post__modal-cancel ${theme}`}
                    onClick={() => toggleEditModal(false)}
                />
            </div>
        </div>
    );
};

BlogPostEditModal.propTypes = {
    updatePostsData: PropTypes.func,
    id: PropTypes.string,
    toggleEditModal: PropTypes.func,
    date: PropTypes.string,
    posts: PropTypes.array,
    post: PropTypes.object,
};

export default BlogPostEditModal;
