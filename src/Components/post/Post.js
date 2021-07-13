const Post = ({post, date}) => {
    return (
        <article className="post__message" key={post.value}>
            <div className="post__message-header">
                <span>{post.user ? post.user : 'Guest'}</span>
                <span>{date}</span>
            </div>
            <div className="post__message-content">
                <p>{post.value}</p>
            </div>
        </article>
    )
}

export default Post;