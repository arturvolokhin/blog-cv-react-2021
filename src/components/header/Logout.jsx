import React from 'react';
import { setLocalStorage } from '../../utils/localStorage';
import Button from '../Button';

const Logout = ({ setAuthorization }) => {
  const handleClick = () => {
    setLocalStorage('authorizedUser', false);
    setAuthorization(false);
  };

  return <Button onClick={handleClick} value="Logout" />;
};

export default Logout;
