import React from 'react';

import './global.css';

import { ToastContainer } from 'react-toastify';
import DrawerNav from './components/DrawerNav';

import Routes from './Routes/routes';

const App: React.FC = () => (
  <DrawerNav>
    <ToastContainer
      draggable={false}
      autoClose={2000}
    />
    <Routes />
  </DrawerNav>
);


export default App;