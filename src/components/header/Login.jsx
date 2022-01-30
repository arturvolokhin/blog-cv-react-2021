import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../Button';

const Login = ({ toggleLoginModal }) => {
  const { t } = useTranslation();

  return <Button value={t('buttons.login')} onClick={toggleLoginModal} />;
};

export default Login;
