import React, {useState, useContext} from 'react';
import Button from '../Button';
import { getLocalStorage } from '../../utils/localStorage';
import { ThemeContext } from '../../context/ThemeProvider';
import PropTypes from 'prop-types';

const NewPostField = ({updatePostsData, id}) => {

    const [postData, setPostData] = useState({});
    const [postValue, setPostValue] = useState('');
    const {subtheme} = useContext(ThemeContext)
    const posts = getLocalStorage('posts');
    const user = getLocalStorage('authorizedUser');

    const handleChange = ({target}) => {
        setPostData({id: id, user: user.name, value: target.value,
            login: user.login ? user.login : 'guest'});
        setPostValue(target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        
        if (postData.value && postData.value.length >= 3) {
            posts.splice(0, 0, postData);
            updatePostsData(posts);
            setPostValue('');
        } else {
            alert('Введите минимум 3 символа');
        }
    }


    return(
        <form className="blog__form">
            <textarea 
                className={`blog__field ${subtheme}`} resize="none" 
                maxLength={150} placeholder="New post..."
                onChange={handleChange} value={postValue}
            />
            <Button value={'Submit'} onClick={handleClick}/>
        </form>
    )
}

NewPostField.propTypes = {
    updatePostsData: PropTypes.func,
    id: PropTypes.string,
};

export default NewPostField;