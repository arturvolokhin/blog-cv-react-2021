import React from 'react';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';
import locales from '../../constants';

const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const activeLang = getLocalStorage('lang');
  const localesForRender = [];

  locales.forEach((lang) => {
    lang === activeLang ? localesForRender.unshift(lang) : localesForRender.push(lang);
  });

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLocalStorage('lang', lang);
  };

  return (
    <ul className="lang-switcher">
      {localesForRender.map((lang) => (
        <li className="lang-switcher__item" key={uuid()}>
          <Link to={`/${lang}`}>
            <button
              className="lang-switcher__item-button"
              onClick={() => handleChangeLanguage(lang)}
            >
              {lang}
            </button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LangSwitcher;
