import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';
import { ThemeContext } from '../../context/ThemeProvider';
import TextField from './TextField';
import Button from '../Button';

const LoginForm = ({ setAuthorization, toggleLoginModal }) => {
  const { subtheme } = useContext(ThemeContext);

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
    console.log(values);
    const usersData = getLocalStorage('usersRegData');
    const check = usersData.filter(
      (user) => user.login === values.login && user.password === values.password,
    );
    check.length > 0 ? getAuthorization(...check) : alert('Вы ввели не верные данные');
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
          .max(15, 'Must be 16 characters or less')
          .min(2, 'Must be 2 characters or more')
          .required('Required'),
        password: Yup.string()
          .max(15, 'Must be 16 characters or less')
          .min(2, 'Must be 2 characters or more')
          .required('Required'),
      })}
      onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
    >
      <Form className="modal__form">
        <TextField
          className={`modal__field ${subtheme}`}
          name="login"
          type="text"
          placeholder="Login"
        />
        <TextField
          className={`modal__field ${subtheme}`}
          name="password"
          type="text"
          placeholder="Password"
        />
        <Button type="submit" value="Submit" />
      </Form>
    </Formik>
  );
};

export default LoginForm;
