import React, { ChangeEvent, useState } from 'react';

import './index.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import api from '../../service/api';

const AskForm: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [questionData, SetFormData] = useState({
    subject: '',
    content: ''
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSendQuestion = () => {
    const { subject, content } = questionData;

    const data = {
      subject,
      content
    }

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNTkzMDQ0NjkyLCJleHAiOjE1OTMxMzEwOTJ9.6GWc9DWrM12YObq6ZwgIZtKBRLzqNzBbe6DJti6XOno';
   
    const config = {
      headers: { Authorization: 'Bearer ' + token }
    };

    console.log('mandando:', data);

    api.post('/questions', data, config)
      .then(response => console.log('retorno: ', response.data));

    alert("Foi mensagem!");
    handleClose();
  }

  const HandleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    SetFormData({ ...questionData, [name]: value });
  }

  return (
    <div className='askform-container'>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Perguntar
      </Button>

      <Dialog fullWidth maxWidth="md"open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className="dialog-pergunta">
        <DialogTitle id="form-dialog-title">Pergunta</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Qual sua dúvida?
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="subject"
            // label="Pergunta"
            type="text"
            fullWidth
            placeholder="Assunto"
            onChange={HandleInputChange}
          />
          <br></br>
          <br></br>
          <TextField
            id="outlined-multiline-static"
            label="Pergunta"
            name="content"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            onChange={HandleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSendQuestion} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AskForm;