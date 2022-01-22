import React from 'react';

function Title({ icon }) {
  return (
    <div className="title">
      <img className="title__icon" src={icon} alt="icon" width="40px" />
      <h1 className="title__text">Artur&apos;s V. Blog</h1>
    </div>
  );
}

export default Title;
