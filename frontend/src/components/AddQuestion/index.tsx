import React, { ChangeEvent, useState } from 'react';
import api from '../../services/api';

import './index.css';

import { FiPlus, FiSend } from 'react-icons/fi';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useQuestions } from '../../hooks/useQuestion';
import { AxiosResponse } from 'axios';

interface Question {
    id: number,
    subject: string,
    content: string,
    user_id: number,
    owner: string,
    email: string,
    graduation: string
}

interface QuestionFormData {
    subject: string,
    content: string,
}

interface AddQuestionProps {
    value: string
}

const AddQuestion: React.FC<AddQuestionProps> = ({ value }) => {
    const [open, SetOpen] = useState(false);
    const [questionFormData, SetQuestionFormData] = useState<QuestionFormData>({
        subject: '',
        content: ''
    });
    const { questions, setQuestions } = useQuestions();

    const Notify = () => toast('Questão adicionada com sucesso!', {
        type: 'success',
        className: 'toastcontainer',
    });

    const HandleOpen = () => {
        SetOpen(true);
    };

    const HandleClose = () => {
        SetOpen(false);
    };

    const HandleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        SetQuestionFormData({ ...questionFormData, [name]: value });
    }

    const HandleSubmitQuestion = async () => {
        const { subject, content } = questionFormData;

        const data = {
            subject,
            content
        };

        const questionResponse = await api.post<Question>('/questions', data);

        if (!questionResponse) {
            return null;
        }

        Notify();

        setQuestions([...questions, questionResponse.data]);

        HandleClose();
    };

    return (
        <div>
            <button onClick={HandleOpen} className={'add-question-button'}>
                <span>{value}</span>
                <FiPlus size={20} className='plusIcon' />
            </button>

            <Dialog fullWidth maxWidth="sm" open={open} onClose={HandleClose} aria-labelledby="form-dialog-title" className="dialog-container">
                <DialogTitle className='dialog-title' id="form-dialog-title">Pergunta</DialogTitle>
                <DialogContent className='dialog-content'>
                    <DialogContentText>
                        Qual sua dúvida?
                    </DialogContentText>

                    <section className='input-group'>
                        <input
                            required
                            name='subject'
                            className='subject-input'
                            placeholder='Digite um assunto...'
                            onChange={HandleInputChange}
                        />

                        <input
                            required
                            autoComplete='off'
                            name='content'
                            className='content-input'
                            placeholder='Digite sua pergunta...'
                            onChange={HandleInputChange}
                        />

                    </section>

                </DialogContent>
                <DialogActions className='dialog-actions'>
                    <Button onClick={HandleClose} color="secondary" className='cancelButton'> Cancelar </Button>
                    <Button onClick={HandleSubmitQuestion} variant="contained" color="primary" className='submitButton'>
                        <span>Enviar</span> <FiSend size={20} />
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddQuestion;