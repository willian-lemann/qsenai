import React from 'react';

import './index.css';
import logo from '../../../assets/logo-senai.png';


const Logo: React.FC = () => {
  return (
    <section >
      <img className='logo-container' src={logo} alt="logo senai" />
    </section>
  );
}

export default Logo;