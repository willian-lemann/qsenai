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

import api from '../../service/api';

interface AddQuestionButton {
    primary: boolean
}

const AddQuestionButton: React.FC<AddQuestionButton> = ({ primary, children }) => {

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTkzNzM2NDIwLCJleHAiOjE1OTM4MjI4MjB9.p3TqgmuAEGpgfhlc_cm8PplqTZp8kxjUz4X3PqL5XNs';

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

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
        <div>
            <button onClick={handleClickOpen} className={primary ? 'add-question-button' : 'add-question-button-secundary'}>
                <span>{children}</span>
                <FiPlus size={20} className='plusIcon' />
            </button>

            <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className="dialog-pergunta">
                <DialogTitle id="form-dialog-title">Pergunta</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Qual sua dúvida?
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="subject"
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
                    <Button onClick={handleClose} color="secondary">
                        Cancelar
                </Button>
                    <Button onClick={handleSendQuestion} variant="contained" color="primary">
                        <span>Enviar </span><FiSend size={20} />                         

                </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}

export default AddQuestionButton;