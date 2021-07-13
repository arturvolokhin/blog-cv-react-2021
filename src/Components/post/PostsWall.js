import { getLocalStorage } from '../api/localStorageApi';
import Post from './Post';

const PostsWall = ({setNewPost}) => {

    const posts = getLocalStorage('posts');
    const date = new Date().toJSON().slice(0,10);

    const handleClick = () => {
        localStorage.removeItem('posts');
        setNewPost('');
    }


    return(
        <section className="post__wall">
            <h2 className="subtitle">Posts wall:</h2>
            <p className="post__delete" onClick={handleClick}>Delete all posts</p>
            {posts.reverse().map(post => {
                return(
                    <Post post={post} date={date}/>
                )
            })}
        </section>
    )
}

export default PostsWall;