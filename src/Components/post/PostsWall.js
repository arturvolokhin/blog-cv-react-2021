import { getLocalStorage } from '../api/localStorageApi';
import Post from './Post';

const PostsWall = ({setNewPost}) => {

    const posts = getLocalStorage('posts');
    const date = new Date().toJSON().slice(0,10);

    const handleClick = () => {
        localStorage.removeItem('posts');
        setNewPost(Math.random());
    }


    return(
        <section className="post__wall">
            <h2 className="subtitle">Posts wall:</h2>
            <p className="post__wall-delete" onClick={handleClick}>Delete all posts</p>
            {posts.reverse().map((post, index) => {
                return(
                    <Post 
                        post={post} 
                        date={date} 
                        id={index} 
                        key={index + post.user}
                        setNewPost={setNewPost}
                    />
                )
            })}
        </section>
    )
}

export default PostsWall;