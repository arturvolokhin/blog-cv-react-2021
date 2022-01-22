import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

function Button({ value, onClick }) {
  const { subtheme, button } = useContext(ThemeContext);

  return (
    <button className={`button ${subtheme} ${button}`} onClick={onClick} type="button">
      {value}
    </button>
  );
}

export default Button;
