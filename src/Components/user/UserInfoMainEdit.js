import React,{useState, useEffect} from 'react';
import UserInfoMainEditField from './UserInfoMainEditField';
import { getLocalStorage, setLocalStorage } from '../api/localStorageApi';
import Button from '../Button';

const UserInfoMainEdit = ({toggleUserInfoEdit}) => {

    const data = getLocalStorage('userInfo');
    const [text, setText] = useState(data);

    useEffect(() => {
        console.log(text);
    }, [text]);
    
    const handleChange = ({target}) => {
        setText({...text, [target.name]: target.value});
    }

    const handleClick = (e) => {
        e.preventDefault();
        setLocalStorage('userInfo', text);
        toggleUserInfoEdit();
    }

    return(
        <form className="user__edit">

            {
                Object.keys(data).map((key) => {
                    return (
                        <UserInfoMainEditField key={key} 
                            name={key} placeholder={key}
                            onChange={handleChange}
                        />
                    )    
                })
            }

            <div className="user__edit-buttons">
                <Button value={'Submit'} onClick={handleClick}/>
                <Button value={'Cancel'} onClick={toggleUserInfoEdit}/>
            </div>
        </form>
    )
}

export default UserInfoMainEdit;