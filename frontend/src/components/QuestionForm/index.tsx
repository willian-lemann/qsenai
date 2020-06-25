import React, { useState } from 'react';

import './index.css';

import Button from '@material-ui/core/Button';

import QuestionModal from '../../components/QuestionModal';

const AskForm: React.FC = () => {

  const [isOpen, setOpen] = useState(false);  

  return (
    <div className='askform-container'>      
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Perguntar
      </Button>     

      {isOpen && <QuestionModal />}
    </div>
  );
}

export default AskForm;