import React from 'react';
import { useTranslation } from 'react-i18next';

import { setLocalStorage } from '../../utils/localStorage';
import Button from '../Button';

const Logout = ({ setAuthorization }) => {
  const { t } = useTranslation();

  const handleClick = () => {
    setLocalStorage('authorizedUser', false);
    setAuthorization(false);
  };

  return <Button onClick={handleClick} value={t('buttons.logout')} />;
};

export default Logout;
