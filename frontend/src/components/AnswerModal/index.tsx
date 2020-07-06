import React, { ChangeEvent, useState } from 'react';

import './index.css';

import { FiPlus, FiSend } from 'react-icons/fi';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import api from '../../service/api';

interface QuestionProps {
  question: {
    id?: number,
    subject?: string,
    content?: string,
  }
}

const AnswerModal: React.FC<QuestionProps> = ({ question }) => {

  const content = question?.content;
  const id = question?.id;
  const subject = question?.subject;

  const notify = () => toast("Resposta enviada!");

  const [open, setOpen] = useState(false);

  const [answerData, SetAnswerFormData] = useState({
    content: ''
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const HandleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    SetAnswerFormData({ ...answerData, [name]: value });
  }

  const handleSendAnswer = async () => {
    const { content } = answerData;

    const question_id = question.id;
    
    const data = {
      question_id,
      content
    };

    console.log('mandando:', data);

    const answer = await api.post('/answers', data/*, config*/);

    console.log(answer.data);

    answer && notify();

    handleClose();
  }

  return (

    <div>
      <button onClick={handleClickOpen} className='add-question-button'>
        <span>Responder</span> <FiPlus size={20} className='plusIcon' />
      </button>

      <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className="dialog-pergunta">
        <DialogTitle id="form-dialog-title">Envie sua resposta</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {subject}
          </DialogContentText>
          <Typography gutterBottom>
            {content}
          </Typography>

          <TextField
            id="outlined-multiline-static"
            label="Resposta"
            name="content"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            onChange={HandleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancelar
                </Button>
          <Button onClick={handleSendAnswer} variant="contained" color="primary">
            <span>Enviar </span><FiSend size={20} />

          </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}

export default AnswerModal;