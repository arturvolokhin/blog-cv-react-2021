import React, {useState} from 'react';
import Avatar from './Avatar';
import UserInfoMain from './UserInfoMain';
import UserTechStack from './UserTechStack';
import UserContacts from './UserContacts';
import UserInfoMainEdit from './UserInfoMainEdit';
import UserProjects from './UserProjects';
import avatar from '../../images/avatar.jpg';

const User = ({authorization}) => {

    const [userInfoMainEdit, setUserInfoMainEdit] = useState(false);

    const toggleUserInfoEdit = () => {
        authorization && setUserInfoMainEdit(!userInfoMainEdit);
    }

    return(
        <section className="user">
            <Avatar avatar={avatar}/>
            <UserInfoMain 
                authorization={authorization}
                toggleUserInfoEdit={toggleUserInfoEdit}
            />
            <UserTechStack/>
            <UserProjects/>
            <UserContacts/>
            {userInfoMainEdit && authorization ? 
                <UserInfoMainEdit toggleUserInfoEdit={toggleUserInfoEdit}/> : 
                null
            }
        </section>
    )
}

export default User;