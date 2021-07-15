import React,{useState} from 'react';
import iconAdmin from '../../images/iconAdmin.jpg';
import iconGuest from '../../images/iconGuest.svg';
import iconUser from '../../images/iconUser.png';
import { getLocalStorage, setLocalStorage } from '../api/localStorageApi';

const Post = ({post, date, id, update, handleClickEdit}) => {
    
    const handleClickDelete = ({target}) => {
        const posts = getLocalStorage('posts');
        const remainingPosts = posts.filter(post => post !== posts[target.id]);
        setLocalStorage('posts', remainingPosts);
        update(Math.random())
    }

   
    return (
        <article className="post__message" id={id}>
            <img className="post__message-icon" alt="Post user icon"
                src={post.user === 'Artur Volokhin' ? iconAdmin :
                    !post.user ? iconGuest : iconUser}
            />
            <div className="post__message-content">
                <div className="post__message-header">
                    <span className="post__message-user">{post.user ? post.user : 'Guest'}</span>
                    <div className="post__message-article">
                        <span>{date}</span>
                        <div className="post__dropdown">
                            <ul className="post__settings">
                                <li className="post__settings-item"
                                    onClick={handleClickDelete} id={id}>Delete post</li>
                                <li className="post__settings-item"
                                    onClick={handleClickEdit} id={id}>Edit</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="post__message-main">
                    <p>{post.value}</p>
                </div>
            </div>
            
            
        </article>
    )
}

export default Post;