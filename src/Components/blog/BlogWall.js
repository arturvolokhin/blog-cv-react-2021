import React,{useState} from 'react';
import { getLocalStorage } from '../api/localStorageApi';
import BlogPostEditModal from './BlogPostEditModal';
import BlogPost from './BlogPost';
import PropTypes from 'prop-types';

const BlogWall = ({ authorization, updatePostsData, posts }) => {

    const [toggleEditModal, setToggleEditModal] = useState(false);
    const [postData, setPostData] = useState(null);
    const [id, setId] = useState(null);
    const date = new Date().toJSON().slice(0,10);

    const handleClick = () => {
        if (authorization.login === 'admin'){
            localStorage.removeItem('posts');
            updatePostsData([]);
        } else {
            alert('Удалить все посты может только администратор');
        }
    }

    const handleClickEdit = ({target}) => {
        const post = posts.find(post => post.id === target.id);
        
        if (authorization.login === 'admin' || authorization.login === post.login) {
            setId(target.id);
            !toggleEditModal && setToggleEditModal(true);
            setPostData(post);
        } else {
            alert('Вы не можете редактировать чужой пост!');
        }
    }


    return(
        <section className="blog__wall">
            <h2 className="subtitle">Posts wall:</h2>
            <p className="blog__wall-delete" onClick={handleClick}>Delete all posts</p>
            {toggleEditModal &&
                <BlogPostEditModal 
                    post={postData}
                    date={date}
                    toggleEditModal={setToggleEditModal}
                    posts={posts}
                    id={id}
                    updatePostsData={updatePostsData}
                />
            }
            {posts.map((post, index) => {
    
                return(
                    <BlogPost 
                        post={post}
                        posts={posts}
                        date={date} 
                        id={post.id} 
                        key={index}
                        updatePostsData={updatePostsData}
                        handleClickEdit={handleClickEdit}
                        authorization={authorization}
                    />
                )
            })}
        </section>
    )
}

BlogWall.propTypes = {
    updatePostsData: PropTypes.func,
    authorization: PropTypes.object,
};

export default BlogWall;