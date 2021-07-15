import React,{useState} from 'react';
import { getLocalStorage } from '../api/localStorageApi';
import PostEditModal from './PostEditModal';
import Post from './Post';

const PostsWall = ({update}) => {

    const [stateEditModal, setStateEditModal] = useState(false);
    const [valueEditModal, setValueEditModal] = useState(null);
    const [id, setId] = useState('');
    const posts = getLocalStorage('posts');
    const date = new Date().toJSON().slice(0,10);

    const handleClick = () => {
        localStorage.removeItem('posts');
        update(Math.random());
    }

    const handleClickEdit = ({target}) => {
        const posts = getLocalStorage('posts').reverse();
        const post = posts.find(item => item === posts[target.id]);
        setId(target.id);
        setValueEditModal(post);
        !stateEditModal && setStateEditModal(true);
    }


    return(
        <section className="post__wall">
            <h2 className="subtitle">Posts wall:</h2>
            <p className="post__wall-delete" onClick={handleClick}>Delete all posts</p>
            {stateEditModal &&
                <PostEditModal 
                    post={valueEditModal}
                    date={date}
                    setStateEditModal={setStateEditModal}
                    id={id}
                    update={update}
                    />
            }
            {posts.reverse().map((post, index) => {
                return(
                    <Post 
                        post={post} 
                        date={date} 
                        id={index} 
                        key={index}
                        update={update}
                        handleClickEdit={handleClickEdit}
                        setId={setId}
                    />
                )
            })}
        </section>
    )
}

export default PostsWall;