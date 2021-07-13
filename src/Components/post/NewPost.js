import React, {useState} from 'react';
import Button from '../Button';
import { setLocalStorage, getLocalStorage } from '../api/localStorageApi';

const NewPost = ({setNewPost}) => {

    const [postValue, setPostValue] = useState('');
    const posts = getLocalStorage('posts');

    const handleChange = ({target}) => {
        setPostValue(target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();
        posts.push(postValue);
        setLocalStorage('posts', posts);
        setNewPost(postValue);
        setPostValue('');
    }

    return(
        <form className="post__form">
            <textarea 
                className="post__field" resize="none" 
                maxLength={150} placeholder="New post..."
                rows="2" minLength={10} onChange={handleChange}
                value={postValue}
            />
            <Button value={'Submit'} onClick={handleClick}/>
        </form>
    )
}

export default NewPost;