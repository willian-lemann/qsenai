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
  data: {
    id?: number,
    subject?: string,
    content?: string,
    owner?: string,
  }
}

const AnswerModal: React.FC<QuestionProps> = ({ data: { id, subject, content, owner } }) => {
  const [open, setOpen] = useState(false);
  const [answerFormData, SetAnswerFormData] = useState({
    answerContent: ''
  });

  const notify = () => toast("Resposta enviada!", {
    type: 'success',
    className: 'toastcontainer'
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
      id,
      answerContent
    };

    const answer = await api.post('/answers', data);

    answer !== null && notify();

    HandleClose();
  }

  return (

    <div>
      <Button onClick={HandleOpen} className='add-question-button'>
        <span>Responder</span> <FiPlus size={20} className='plusIcon' />
      </Button>

      <Dialog fullWidth maxWidth="md" open={open} onClose={HandleClose} aria-labelledby="form-dialog-title" className="dialog-pergunta">
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
          <Button onClick={HandleClose} color="secondary">
            Cancelar
          </Button>
          <Button onClick={HandleSubmitAnswer} variant="contained" color="primary">
            <span>Enviar </span><FiSend size={20} />
          </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}

export default AnswerModal;