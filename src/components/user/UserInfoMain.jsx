import React from 'react';
import { v4 as uuid } from 'uuid';

import { getLocalStorage } from '../../utils/localStorage';
import UserInfoMainField from './UserInfoMainField';

function UserInfoMain({ toggleUserInfoEdit, authorization }) {
  const data = getLocalStorage('userInfo');

  return (
    <article className="section user__info">
      {authorization.login === 'admin' && (
        <p className="user__info-edit" role="presentation" onClick={toggleUserInfoEdit}>
          Edit
        </p>
      )}
      <h2 className="subtitle">Main information</h2>
      <ul className="user__info-content">
        {Object.entries(data).map(([key, value]) => (
          <UserInfoMainField key={uuid()} name={key} value={value} />
        ))}
      </ul>
    </article>
  );
}

export default UserInfoMain;
