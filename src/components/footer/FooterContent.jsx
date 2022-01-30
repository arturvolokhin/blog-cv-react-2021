import React from 'react';
import { useTranslation } from 'react-i18next';

const FooterContent = () => {
  const { t } = useTranslation();

  return <p className="description">{t('footer.descr')}</p>;
};

export default FooterContent;
