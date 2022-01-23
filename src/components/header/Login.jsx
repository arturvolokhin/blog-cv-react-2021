import React from 'react';
import Button from '../Button';

function Login({ toggleLoginModal }) {
  return <Button value="Login" onClick={toggleLoginModal} />;
}

export default Login;
