import React from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

import './index.css';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FiTrash } from 'react-icons/fi';
import { toast } from 'react-toastify';

interface DeleteQuestionButtonProps {
  id?: number,
}

const DeleteQuestionButton: React.FC<DeleteQuestionButtonProps> = ({ id }) => {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const HandleClose = () => {
    setOpen(false);
  };

  const notify = (value: string) => toast(value, {
    type: 'success',
    className: 'toastcontainer'
  });

  const HandleDelete = async () => {
    try {
      const deleteQuestion = await api.delete(`/questions/${id}`);
      deleteQuestion !== null && notify('Questão deletada.');
      history.push('/');
      HandleClose();
    } catch (error) {
      notify('Erro ao deletar questão.');
    }
  }

  return (
    <div>
      <button onClick={handleClickOpen} className='add-delete-button'>
        <FiTrash size={20} className='trashIcon' />
      </button>

      <Dialog
        className='delete-dialog-container'
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={HandleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Você deseja mesmo deletar essa questão?</DialogTitle>
        <DialogContent className='delete-dialog-container'>
          <DialogContentText id="alert-dialog-description">
            Caso você delete esta questão, não poderá mais recuperá-lá. Junto com as questão, serão excluídas as respostas atreladas a ela.
          </DialogContentText>
        </DialogContent>
        <DialogActions className='delete-question-modal-actions'>
          <Button onClick={HandleClose} color="primary">
            Deixa pra lá
          </Button>
          <Button className='modal-delete-modal' variant="contained" color='primary' onClick={HandleDelete} autoFocus>
            Pode deletar!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteQuestionButton;