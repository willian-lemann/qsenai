import React from 'react';
import QuestionProvider from './QuestionProvider';

const Provider: React.FC = ({ children }) => (
   <QuestionProvider>
      {children}
   </QuestionProvider>
);

export default Provider;