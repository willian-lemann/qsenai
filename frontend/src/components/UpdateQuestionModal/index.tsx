import React, { ChangeEvent, useState } from 'react';
import api from '../../services/api';

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
  const [open, setOpen] = useState(false);
  const [updateQuestionFormData, SetUpdateQuestionFormData] = useState({
    content: '',
    subject: ''
  });

  const Notify = (value: string) => toast(value, {
    type: 'success',
    className: 'toastcontainer'
  });

  const HandleClickOpen = () => {
    setOpen(true);
  };

  const HandleClose = () => {
    setOpen(false);
  };

  const HandleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    SetUpdateQuestionFormData({ ...updateQuestionFormData, [name]: value });
  }

  const HandleSendUpdateQuestion = async () => {
    const { content, subject } = updateQuestionFormData;

    const data = {
      content,
      subject
    };

    const UpdateQuestion = await api.put(`/questions/${id}`, data);

    UpdateQuestion && Notify('Questão alterada com sucesso!');

    HandleClose();
  }

  return (

    <div>
      <button onClick={HandleClickOpen} className='add-update-button'>
        <FiEdit size={20} className='plusIcon' />
      </button>

      <Dialog fullWidth maxWidth="md" open={open} onClose={HandleClose} aria-labelledby="form-dialog-title" className="dialog-pergunta">
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
          <Button onClick={HandleClose} color="secondary">
            Cancelar
                </Button>
          <Button onClick={HandleSendUpdateQuestion} variant="contained" color="primary">
            <span>Alterar </span><FiSend size={20} />

          </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}

export default UpdateQuestionModal;