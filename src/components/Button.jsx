import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

const Button = ({ value, onClick, type }) => {
  const { subtheme, button } = useContext(ThemeContext);

  return (
    <button className={`button ${subtheme} ${button}`} onClick={onClick} type={type || 'button'}>
      {value}
    </button>
  );
};

export default Button;
