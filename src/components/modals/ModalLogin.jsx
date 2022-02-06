import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeContext } from '../../context/ThemeProvider';
import LoginForm from '../forms/LoginForm';

const ModalLogin = ({
  isLoginModal,
  toggleLoginModal,
  toggleRegistrationModal,
  setAuthorization,
}) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const registrationClick = () => {
    toggleLoginModal();
    toggleRegistrationModal();
  };

  return (
    <article className={isLoginModal ? `modal visible ${theme}` : 'modal'}>
      <div className="close" role="presentation" onClick={toggleLoginModal} />
      <h2 className="subtitle">{t('modal-login.title')}</h2>
      <LoginForm toggleLoginModal={toggleLoginModal} setAuthorization={setAuthorization} />
      <h2
        className="subtitle modal__registration-link"
        role="presentation"
        onClick={registrationClick}
      >
        {t('modal-login.link')}
      </h2>
    </article>
  );
};

export default ModalLogin;
