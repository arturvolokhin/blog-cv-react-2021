import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeContext } from '../../context/ThemeProvider';
import RegistrationForm from '../forms/RegistrationForm';

const ModalRegistration = ({ isRegistrationModal, toggleRegistrationModal, toggleLoginModal }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <article className={isRegistrationModal ? `modal visible ${theme}` : 'modal'}>
      <div className="close" role="presentation" onClick={toggleRegistrationModal} />
      <h2 className="subtitle">{t('modal-registration.title')}</h2>

      <RegistrationForm
        toggleRegistrationModal={toggleRegistrationModal}
        toggleLoginModal={toggleLoginModal}
      />
    </article>
  );
};

export default ModalRegistration;
