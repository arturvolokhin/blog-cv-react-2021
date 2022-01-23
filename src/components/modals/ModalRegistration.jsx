import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import RegistrationForm from '../forms/RegistrationForm';

const ModalRegistration = ({ isRegistrationModal, toggleRegistrationModal, toggleLoginModal }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <article className={isRegistrationModal ? `modal visible ${theme}` : 'modal'}>
      <div className="close" role="presentation" onClick={toggleRegistrationModal} />
      <h2 className="subtitle">Enter your data:</h2>

      <RegistrationForm
        toggleRegistrationModal={toggleRegistrationModal}
        toggleLoginModal={toggleLoginModal}
      />
    </article>
  );
};

export default ModalRegistration;
