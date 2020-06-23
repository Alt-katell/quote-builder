import React from 'react';
import feather from './feather.svg';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <img src={feather} className="feather" alt="Feather Logo" />
      <p className="say">SAY</p>
      <p className="quote-bar">QUOTE BAR</p>
    </div>
  );
}

export default Logo;
