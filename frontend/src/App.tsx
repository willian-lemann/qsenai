import React from 'react';

import './global.css';

import { ToastContainer } from 'react-toastify';

import Routes from './Routes/routes';

import QuestionProvider from './context';

const App: React.FC = () => (
   <QuestionProvider>
      <ToastContainer
         draggable={false}
         autoClose={2000}
      />
      <Routes />
   </QuestionProvider>
);


export default App;