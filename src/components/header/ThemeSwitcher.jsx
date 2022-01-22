import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';

function ThemeSwitch() {
  const { toggle } = useContext(ThemeContext);

  return (
    <label className="switch">
      <input onClick={toggle} className="switch__checkbox" type="checkbox" />
      <span className="switch__slider" />
    </label>
  );
}

export default ThemeSwitch;
