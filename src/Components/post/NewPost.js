import Button from '../Button';

const NewPost = () => {
    return(
        <form className="post__form">
            <textarea className="post__field" resize="none" maxLength={12} placeholder="New post..."></textarea>
            <Button value={'Submit'}/>
        </form>
    )
}

export default NewPost;