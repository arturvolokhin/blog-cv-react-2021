import React,{useState} from 'react';
import { getLocalStorage, setLocalStorage } from '../api/localStorageApi';

import iconAdmin from '../../images/iconAdmin.jpg';
import iconGuest from '../../images/iconGuest.svg';
import iconUser from '../../images/iconUser.png';

const PostEditModal = ({post, date, setStateEditModal, id, update}) => {

    const [text, setText] = useState(post.value)

    const handleChange = ({target}) => {
        setText(target.value);
    }

    const handleClick = ({target}) => {
        let posts = getLocalStorage('posts');
        let selectedPost = posts.find(post => post === posts[id]);
        selectedPost.value = text;
        posts.splice(id, 1, selectedPost);
        setLocalStorage('posts', posts);
        setStateEditModal(false);
        update(Math.random());
    }

    return(
        <div className="post__modal">
            <div className="post__modal-content">
                <img className="post__modal-icon" alt="Post user icon"
                    src={post.user === 'Artur Volokhin' ? iconAdmin :
                        !post.user ? iconGuest : iconUser}
                />
                <div className="post__modal-header">
                    <span className="post__modal-user">{post.user ? post.user : 'Guest'}</span>
                    <span>{date}</span>  
                </div>
                <textarea 
                    className="post__modal-message" 
                    value={text}
                    onChange={handleChange}
                    autoFocus
                />
                <div className="post__modal-submit" onClick={handleClick}/>
                <div className="post__modal-cancel" onClick={() => setStateEditModal(false)}/>
            </div>

        </div>
    )
}

export default PostEditModal;