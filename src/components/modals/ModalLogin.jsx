import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import LoginForm from '../forms/LoginForm';

const ModalLogin = ({
  isLoginModal,
  toggleLoginModal,
  toggleRegistrationModal,
  setAuthorization,
}) => {
  const { theme } = useContext(ThemeContext);

  const registrationClick = () => {
    toggleLoginModal();
    toggleRegistrationModal();
  };

  return (
    <article className={isLoginModal ? `modal visible ${theme}` : 'modal'}>
      <div className="close" role="presentation" onClick={toggleLoginModal} />
      <h2 className="subtitle">Already Registered? Enter your data:</h2>
      <LoginForm toggleLoginModal={toggleLoginModal} setAuthorization={setAuthorization} />
      <h2
        className="subtitle modal__registration-link"
        role="presentation"
        onClick={registrationClick}
      >
        Not Registered? Click me
      </h2>
    </article>
  );
};

export default ModalLogin;
