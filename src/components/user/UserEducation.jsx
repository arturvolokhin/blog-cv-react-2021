import React from 'react';
import { useTranslation } from 'react-i18next';

const UserEducation = () => {
  const { t } = useTranslation();

  return (
    <section className="section education">
      <h2 className="subtitle">{t('user.education')}</h2>
      <ul className="education__list">
        <li className="education__item">
          <p className="education__date">10.11.2020 - 09.08.2021:</p>
          <p className="education__name">{t('user.coding-school')}</p>
          <p className="education__specialization">{t('user.developer')}</p>
        </li>
        <li className="education__item">
          <p className="education__date">2018-2023:</p>
          <p className="education__name">{t('user.university')}</p>
          <p className="education__specialization">{t('user.specialization')}</p>
        </li>
        <li className="education__item">
          <p className="education__date">2016-2017:</p>
          <p className="education__name">{t('user.colledge')}</p>
          <p className="education__specialization">{t('user.profession')}</p>
        </li>
      </ul>
    </section>
  );
};

export default UserEducation;
