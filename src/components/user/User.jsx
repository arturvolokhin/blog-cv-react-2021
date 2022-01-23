import React, { useState } from 'react';
import UserInfoMain from './UserInfoMain';
import Avatar from './Avatar';
import UserTechStack from './UserTechStack';
import UserContacts from './UserContacts';
import UserInfoMainEdit from './UserInfoMainEdit';
import UserProjects from './UserProjects';
import UserEducation from './UserEducation';

const User = ({ authorization }) => {
  const [userInfoMainEdit, setUserInfoMainEdit] = useState(false);

  const toggleUserInfoEdit = () => {
    authorization && setUserInfoMainEdit(!userInfoMainEdit);
  };

  return (
    <section className="user">
      <Avatar />
      <UserInfoMain authorization={authorization} toggleUserInfoEdit={toggleUserInfoEdit} />
      <UserEducation />
      <UserTechStack />
      <UserProjects />
      <UserContacts />
      {userInfoMainEdit && authorization ? (
        <UserInfoMainEdit toggleUserInfoEdit={toggleUserInfoEdit} />
      ) : null}
    </section>
  );
};

export default User;
