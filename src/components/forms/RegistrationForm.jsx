import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { setLocalStorage, getLocalStorage } from '../../utils/localStorage';
import { ThemeContext } from '../../context/ThemeProvider';
import TextField from './TextField';
import Button from '../Button';

const RegistrationForm = ({ onSubmit, toggleLoginModal, toggleRegistrationModal }) => {
  const { subtheme } = useContext(ThemeContext);

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
          .max(15, 'Must be 16 characters or less')
          .min(6, 'Must be 6 characters or more')
          .required('Required'),
        password: Yup.string()
          .max(15, 'Must be 16 characters or less')
          .min(6, 'Must be 6 characters or more')
          .required('Required'),
        name: Yup.string()
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
        <TextField
          className={`modal__field ${subtheme}`}
          name="name"
          type="text"
          placeholder="Your name"
        />
        <Button type="submit" value="Submit" onClick={onSubmit} />
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
