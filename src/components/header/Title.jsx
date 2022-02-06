import React from 'react';
import { useTranslation } from 'react-i18next';

const Title = ({ icon }) => {
  const { t } = useTranslation();

  return (
    <div className="title">
      <img className="title__icon" src={icon} alt={t('alts.logo')} width="40px" />
      <h1 className="title__text">{t('title')}</h1>
    </div>
  );
};

export default Title;
