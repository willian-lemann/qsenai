import React from 'react';

import './global.css';

import { ToastContainer } from 'react-toastify';

import Routes from './Routes/routes';

const App: React.FC = () => (
  <>
    <ToastContainer
      draggable={false}
      autoClose={2000}
    />
    <Routes />
  </>
);


export default App;