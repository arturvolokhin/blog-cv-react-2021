import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';
import { ThemeContext } from '../../context/ThemeProvider';
import TextField from './TextField';
import Button from '../Button';

const LoginForm = ({ setAuthorization, toggleLoginModal }) => {
  const { subtheme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const getAuthorization = ({ login, password, name }) => {
    const authorizedUser = {
      login,
      password,
      name,
    };

    setLocalStorage('authorizedUser', authorizedUser);
    setAuthorization(authorizedUser);
  };

  const handleSubmit = (values, resetForm) => {
    const usersData = getLocalStorage('usersRegData');
    const check = usersData.filter(
      (user) => user.login === values.login && user.password === values.password,
    );
    check.length > 0 ? getAuthorization(...check) : alert(t('validation.error-data'));
    resetForm({
      login: '',
      password: '',
    });
    toggleLoginModal();
  };

  return (
    <Formik
      initialValues={{
        login: '',
        password: '',
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
        <Button type="submit" value={t('buttons.submit')} />
      </Form>
    </Formik>
  );
};

export default LoginForm;
