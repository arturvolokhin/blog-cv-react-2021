import React from 'react';
import { useField } from 'formik';

const TextField = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      {meta.touched && meta.error ? <div className="modal__form-error">{meta.error}</div> : null}
      <input className="text-input" {...field} {...props} />
    </>
  );
};

export default TextField;
