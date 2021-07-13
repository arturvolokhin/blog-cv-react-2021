import iconAdmin from '../../images/iconAdmin.jpg';
import iconGuest from '../../images/iconGuest.svg';
import iconUser from '../../images/iconUser.png';

const Post = ({post, date}) => {
    return (
        <article className="post__message" key={post.user}>
            <img className="post__message-icon" 
                src={post.user === 'Artur Volokhin' ? iconAdmin :
                    !post.user ? iconGuest : iconUser}
            />
            <div className="post__message-content">
                <div className="post__message-header">
                    <span>{post.user ? post.user : 'Guest'}</span>
                    <span>{date}</span>
                </div>
                <div className="post__message-main">
                    <p>{post.value}</p>
                </div>
            </div>
            <div className="post__dropdown">
                <ul className="post__settings">
                    <li className="post__settings-item">Delete post</li>
                    <li className="post__settings-item">Edit</li>
                </ul>
            </div>
            
        </article>
    )
}

export default Post;