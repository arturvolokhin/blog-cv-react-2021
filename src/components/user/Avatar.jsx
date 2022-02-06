import { useTranslation } from 'react-i18next';

import React from 'react';
import avatar from '../../images/avatar.jpg';

const Avatar = () => {
  const { t } = useTranslation();

  return <img src={avatar} alt={t('alts.avatar')} width="350px" />;
};

export default Avatar;
