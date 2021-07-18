import React,{useState} from 'react';
import UserInfoMainEditField from './UserInfoMainEditField';
import { getLocalStorage, setLocalStorage } from '../api/localStorageApi';
import Button from '../Button';
import { ThemeContext } from '../../context/ThemeProvider';

const UserInfoMainEdit = ({toggleUserInfoEdit}) => {

    const data = getLocalStorage('userInfo');
    const [text, setText] = useState(data);

    const handleChange = (target) => {
        setText({...text, [target.name]: target.value});
    }

    const handleClick = (e) => {
        e.preventDefault();
        setLocalStorage('userInfo', text);
        toggleUserInfoEdit();
    }

    return(
        <ThemeContext>
            {({theme, subtheme}) => (
                <form className={`user__edit ${subtheme}`}>

                    {
                        Object.entries(data).map(([key, value]) => {
                            return (
                                <UserInfoMainEditField key={key} 
                                    name={key} placeholder={key}
                                    saveValue={handleChange} text={value}
                                />
                            )    
                        })
                    }

                    <div className="user__edit-buttons">
                        <div className={`post__modal-submit ${theme}`} onClick={handleClick}/>
                        <div className={`post__modal-cancel ${theme}`} onClick={toggleUserInfoEdit}/>
                    </div>
                </form>
            )}
        </ThemeContext>
    )
}

export default UserInfoMainEdit;