import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

import { setLocalStorage, getLocalStorage } from '../../utils/localStorage';
import { ThemeContext } from '../../context/ThemeProvider';
import TextField from './TextField';
import Button from '../Button';

const RegistrationForm = ({ toggleLoginModal, toggleRegistrationModal }) => {
  const { subtheme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const setUserRegDataToLocalStorage = (values) => {
    const userRegData = {
      login: values.login,
      password: values.password,
      name: values.name,
    };
    const data = getLocalStorage('usersRegData');
    data.push(userRegData);
    setLocalStorage('usersRegData', data);
  };

  const handleSubmit = (values, resetForm) => {
    !localStorage.usersRegData && setLocalStorage('usersRegData', []);
    setUserRegDataToLocalStorage(values);
    toggleRegistrationModal();
    toggleLoginModal();
    resetForm({
      login: '',
      password: '',
      name: '',
    });
  };

  return (
    <Formik
      initialValues={{
        login: '',
        password: '',
        name: '',
      }}
      validationSchema={Yup.object({
        login: Yup.string()
          .max(15, t('validation.max-length'))
          .min(2, t('validation.min-length'))
          .required(t('validation.required')),
        password: Yup.string()
          .max(15, t('validation.max-length'))
          .min(2, t('validation.min-length'))
          .required(t('validation.required')),
        name: Yup.string()
          .max(15, t('validation.max-length'))
          .min(2, t('validation.min-length'))
          .required(t('validation.required')),
      })}
      onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
    >
      <Form className="modal__form">
        <TextField
          className={`modal__field ${subtheme}`}
          name="login"
          type="text"
          placeholder={t('placeholders.login')}
        />
        <TextField
          className={`modal__field ${subtheme}`}
          name="password"
          type="text"
          placeholder={t('placeholders.password')}
        />
        <TextField
          className={`modal__field ${subtheme}`}
          name="name"
          type="text"
          placeholder={t('placeholders.name')}
        />
        <Button type="submit" value={t('buttons.submit')} />
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
