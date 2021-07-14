import iconAdmin from '../../images/iconAdmin.jpg';
import iconGuest from '../../images/iconGuest.svg';
import iconUser from '../../images/iconUser.png';

const PostEditModal = ({post, date}) => {
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
                <textarea className="post__modal-message" value={post.value}/>
                <div className="post__modal-submit"/>
                <div className="post__modal-cancel"/>
            </div>

        </div>
    )
}

export default PostEditModal;