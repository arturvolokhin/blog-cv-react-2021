import { getLocalStorage } from '../api/localStorageApi';

const PostsField = () => {

    const posts = getLocalStorage('posts');
    const user = getLocalStorage('authorizedUser');
    const date = new Date().toJSON().slice(0,10);


    return(
        <section className="post__fields">
            {posts.reverse().map(post => {
                return(
                    <article className="post__message">
                        <div className="post__message-header">
                            <span>{user.name}</span>
                            <span>{date}</span>
                        </div>
                        <div className="post__message-content">
                            <p>{post}</p>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}

export default PostsField;