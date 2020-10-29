import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
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
import { useQuestions } from '../../hooks/useQuestion';



interface QuestionProps {
  data: {
    id?: number,
    subject?: string,
    content?: string,
    owner?: string,
  },
  handleChange: Dispatch<SetStateAction<any>>
  value: any
}

const UpdateQuestionModal: React.FC<QuestionProps> = ({ data: { id, subject, content, owner }, value, handleChange }) => {
  const [open, setOpen] = useState(false);

  const { questions, setQuestions } = useQuestions();

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

  const HandleSendUpdateQuestion = async () => {
    const { content, subject } = value;

    const data = {
      content,
      subject
    };

    const updatedQuestionResponse = await api.put(`/questions/${id}`, data);

    if (!updatedQuestionResponse.data) {
      return null;
    }

    const updatedQuestion = questions.findIndex(question => question.id === updatedQuestionResponse.data.id);

    setQuestions([questions[updatedQuestion], updatedQuestionResponse.data])
    Notify('Questão alterada com sucesso!');

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
            onChange={handleChange}
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
            onChange={handleChange}
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