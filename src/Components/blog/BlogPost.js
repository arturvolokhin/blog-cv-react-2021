import { ThemeContext } from '../../context/ThemeProvider';
import iconAdmin from '../../images/iconAdmin.jpg';
import iconGuest from '../../images/iconGuest.svg';
import iconUser from '../../images/iconUser.png';
import React from 'react';

const BlogPost = ({post, posts, date, id, updatePostsData, handleClickEdit, authorization}) => {
    
    const handleClickDelete = ({target}) => {
        const index = posts.findIndex(post => post.id === target.id);
        posts.splice(index, 1);
        updatePostsData(posts);
    }

   
    return (
        <ThemeContext>
            {context => (
                <article className="blog__post" id={id}>
                    <img className="blog__post-icon" alt="Post user icon"
                        src={post.user === 'Artur Volokhin' ? iconAdmin :
                            !post.user ? iconGuest : iconUser}
                    />
                    <div className="blog__post-content">
                        <div className="blog__post-header">
                            <span className="blog__post-user">{post.user ? post.user : 'Guest'}</span>
                            <div className="blog__post-article">
                                <span>{date}</span>

                                {
                                    authorization.login === 'admin' ||
                                    authorization.login === post.login ?
                                    <div className="blog__dropdown">
                                        <ul className={`blog__settings ${context.subtheme}`}>
                                            <li className="blog__settings-item"
                                                onClick={handleClickDelete} id={id}>Delete post</li>
                                            <li className="blog__settings-item"
                                                onClick={handleClickEdit} id={id}>Edit</li>
                                        </ul> 
                                    </div>
                                    : null
                                }
                            
                            </div>
                        </div>
                        <div className="blog__post-main">
                            <p>{post.value}</p>
                        </div>
                    </div>
                </article>
            )}
        </ThemeContext>
    )
}

export default BlogPost;