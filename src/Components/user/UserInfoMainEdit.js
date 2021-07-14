import React,{useState} from 'react';
import UserInfoMainEditField from './UserInfoMainEditField';
import { getLocalStorage, setLocalStorage } from '../api/localStorageApi';
import Button from '../Button';

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
        <form className="user__edit">

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
                <Button value={'Submit'} onClick={handleClick}/>
                <Button value={'Cancel'} onClick={toggleUserInfoEdit}/>
            </div>
        </form>
    )
}

export default UserInfoMainEdit;