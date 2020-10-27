import React, { ChangeEvent, useState } from 'react';

import './index.css';

import { FiPlus, FiSend } from 'react-icons/fi';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../services/api';

interface Answer {
  content: string,
  question_id: number,
  answerOwner: string
}

interface QuestionProps {
  data: {
    id?: number,
    subject?: string,
    content?: string,
    owner?: string,
    answers?: Answer[]
  }

}

const AnswerModal: React.FC<QuestionProps> = ({ data: { id, subject, content } }) => {
  const [open, setOpen] = useState(false);
  const [answerFormData, SetAnswerFormData] = useState({
    answerContent: ''
  });

  const Notify = () => toast("Resposta enviada!", {
    type: 'success',
    className: 'toastcontainer',

  });

  const HandleOpen = () => {
    setOpen(true);
  };

  const HandleClose = () => {
    setOpen(false);
  };

  const HandleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    SetAnswerFormData({ ...answerFormData, [name]: value });
  }

  const HandleSubmitAnswer = async () => {
    const { answerContent } = answerFormData;

    const data = {
      question_id: id,
      content: answerContent
    };

    const answer = await api.post('/answers', data);

    answer !== null && Notify();

    HandleClose();
  }

  return (

    <div>
      <button onClick={HandleOpen} className='add-answer-button '>
        <span>Responder</span> <FiPlus size={20} className='plusIcon' />
      </button>

      <Dialog fullWidth maxWidth="md" open={open} onClose={HandleClose} className="answer-dialog-container ">
        <DialogTitle className="delete-dialog-title">Envie sua resposta</DialogTitle>
        <DialogContent className='dialog-content'>
          <DialogContentText>
            {subject}
          </DialogContentText>
          <Typography gutterBottom>
            {content}
          </Typography>

          <input
            autoComplete='off'
            required
            name='content'
            className='answer-content-input'
            placeholder='Digite sua resposta...'
            onChange={HandleInputChange}
          />

        </DialogContent>
        <DialogActions className='dialog-actions'>
          <Button className='cancelButton' onClick={HandleClose} color="secondary">
            Cancelar
          </Button>
          <Button className='submitButton' onClick={HandleSubmitAnswer} variant="contained" color="primary">
            <span>Enviar </span><FiSend size={20} />
          </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}

export default AnswerModal;