import React, { ChangeEvent, useState } from 'react';
import api from '../../service/api';

import './index.css';

import { FiEdit, FiSend } from 'react-icons/fi';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



interface QuestionProps {
  data: {
    id?: number,
    subject?: string,
    content?: string,
    owner?: string,
  }
}

const UpdateQuestionModal: React.FC<QuestionProps> = ({ data: { id, subject, content, owner } }) => {

  const notify = () => toast("Alteração enviada!", {
    type: 'success',
    className: 'toastcontainer'
  });

  const notifyIgual = () => toast("Você não fez alterações!", {
    type: 'error',
    className: 'toastcontainer'
  });

  const [open, setOpen] = useState(false);

  const [updateQuestionFormData, SetUpdateQuestionFormData] = useState({
    content: '',
    subject: ''
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const HandleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    SetUpdateQuestionFormData({ ...updateQuestionFormData, [name]: value });
  }

  const handleSendUpdateQuestion = async () => {
    const { content, subject } = updateQuestionFormData;

    const data = {
      content,
      subject
    };

    const updateQuestion = await api.put(`/questions/${id}`, data);

    updateQuestion && notify();


    handleClose();
  }

  return (

    <div>
      <button onClick={handleClickOpen} className='add-update-button'>
        <FiEdit size={20} className='plusIcon' />
      </button>

      <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className="dialog-pergunta">
        <DialogTitle id="form-dialog-title">Alteração de Pergunta</DialogTitle>
        <DialogContent>
          <TextField
            label="Assunto"
            name="subject"
            defaultValue={subject}
            multiline
            rows={4}
            variant="filled"
            fullWidth
            onChange={HandleInputChange}
          />
          <TextField
            id="outlined-multiline-static"
            label="Pergunta"
            name="content"
            defaultValue={content}
            multiline
            rows={4}
            variant="filled"
            fullWidth
            onChange={HandleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancelar
                </Button>
          <Button onClick={handleSendUpdateQuestion} variant="contained" color="primary">
            <span>Alterar </span><FiSend size={20} />

          </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}

export default UpdateQuestionModal;