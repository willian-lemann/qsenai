import React from 'react';

import './global.css';

import DrawerNav from './components/DrawerNav';

import Routes from './Routes/routes';

const App: React.FC = () => (
  <DrawerNav>
    <Routes />
  </DrawerNav>
);


export default App;