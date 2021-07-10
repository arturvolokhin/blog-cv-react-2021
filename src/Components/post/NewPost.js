const NewPost = () => {
    return(
        <form className="post__form">
            <textarea className="post__field" resize="none" placeholder="New post..."></textarea>
            <button className="post__submit">Submit</button>
        </form>
    )
}

export default NewPost;