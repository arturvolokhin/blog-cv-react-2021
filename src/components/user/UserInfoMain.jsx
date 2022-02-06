import React from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuid } from 'uuid';

import UserInfoMainField from './UserInfoMainField';

const UserInfoMain = ({ toggleUserInfoEdit, authorization }) => {
  const { t } = useTranslation();

  const userInfoArray = Object.entries({
    [t('user.name')]: t('user.user-name'),
    [t('user.birthday')]: '20.11.1997',
    [t('user.location')]: t('user.city'),
  });

  return (
    <article className="section user__info">
      {authorization.login === 'admin' && (
        <p className="user__info-edit" role="presentation" onClick={toggleUserInfoEdit}>
          {t('user.edit')}
        </p>
      )}
      <h2 className="subtitle">{t('user.info')}</h2>
      <ul className="user__info-content">
        {userInfoArray.map(([key, value]) => (
          <UserInfoMainField key={uuid()} name={key} value={value} />
        ))}
      </ul>
    </article>
  );
};

export default UserInfoMain;
