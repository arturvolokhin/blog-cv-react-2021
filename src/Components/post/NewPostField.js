import React, {useState} from 'react';
import Button from '../Button';
import { setLocalStorage, getLocalStorage } from '../api/localStorageApi';

const NewPostField = ({update}) => {

    const [postValue, setPostValue] = useState({});
    const [text, setText] = useState('');
    const posts = getLocalStorage('posts');
    const user = getLocalStorage('authorizedUser');

    const handleChange = ({target}) => {
        setPostValue({user: user.name, value: target.value});
        setText(target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        posts.push(postValue);
        setLocalStorage('posts', posts);
        update(Math.random());
        setText('');
    }


    return(
        <form className="post__form">
            <textarea 
                className="post__field" resize="none" 
                maxLength={150} placeholder="New post..."
                onChange={handleChange} value={text}
            />
            <Button value={'Submit'} onClick={handleClick}/>
        </form>
    )
}

export default NewPostField;