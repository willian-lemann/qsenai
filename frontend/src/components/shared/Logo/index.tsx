import React from 'react';

import './index.css';

import logo from '../../../assets/qsenai.svg';

const Logo: React.FC = () => {
  return (
    <section >
      <img className='logo-container' src={logo} alt="logo senai" />
    </section>
  );
}

export default Logo;