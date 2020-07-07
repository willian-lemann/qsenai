import React from 'react';

import './index.css';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { FiTrash } from 'react-icons/fi';

import { toast } from 'react-toastify';

import api from '../../service/api';

interface DeleteQuestionButtonProps {
  id? : number,
}


const DeleteQuestionButton: React.FC<DeleteQuestionButtonProps> = ({ id }) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const notify = () => toast("Questão deletada!", {
    type: 'success',
    className: 'toastcontainer'
  });
  
  const HandleSubmitDelete = async () => {
    const deleteQuestion = await api.delete(`/questions/${ id }`);

    deleteQuestion !== null && notify();

    handleClose()
  }
  
  return (
    <div>
       <button onClick={handleClickOpen} className='add-question-button'>
        <FiTrash size={20} className='trashIcon'/>
      </button>

      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Você deseja mesmo deletar essa questão?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Caso você delete esta questão, não poderá mais recuperá-lá. Junto com as questão, serão excluídas as respostas atreladas a ela.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Deixa pra lá
          </Button>
          <Button variant="contained" onClick={HandleSubmitDelete} color="secondary" autoFocus>
            Pode deletar!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteQuestionButton;