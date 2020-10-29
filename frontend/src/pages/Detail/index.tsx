import React, { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import api from '../../services/api';

import './index.css';

import Header from '../../components/Header';
import AnswerCard from '../../components/AnswerCard';
import AnswerModal from '../../components/AnswerModal';
import UpdateQuestionModal from '../../components/UpdateQuestionModal';
import LocalStorageService from '../../services/AxiosConfig/LocalStorageService';
import DeleteQuestionButton from '../../components/DeleteQuestionButton';


interface Answer {
    content: string,
    question_id: number,
    answerOwner: string
}

interface Question {
    id?: number | undefined,
    subject?: string,
    content?: string,
    owner?: string,
}

interface QuestionResponse {
    question: {
        id: number,
        subject: string,
        content: string,
        owner: string,
    }
    answers: Answer[]
}

interface Params {
    id: string
}

const Detail: React.FC = () => {
    const localStorageService = LocalStorageService();
    const { id: question_id } = useParams<Params>();
    const [loggedUser, SetLoggedUser] = useState<string>('');
    const [question, SetQuestion] = useState<Question>({});
    const [answers, SetAnswers] = useState<Answer[]>();
    const numberOfAnswers = answers?.length;
    const { id, subject, content, owner } = question;
   
    const HandleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        SetQuestion({ ...question, [name]: value });
    }

    const isOwnerAndLoggedUserAndHasAsnwer = (owner?: string, loggedUser?: string, numberOfAnswers?: number) => {
        return owner === loggedUser && numberOfAnswers === 0;
    }

    const isOnwerAndLoggedTheSameUser = (owner?: string, loggedUser?: string) => {
        return owner === loggedUser;
    }

    useEffect(() => {
        const { user } = localStorageService.GetToken();

        if (user)
            SetLoggedUser(user);

        const loadQuestion = async () => {
            const response = await api.get<QuestionResponse>(`/questions/${question_id}`);
            SetQuestion(response.data.question);
            SetAnswers(response.data.answers);
        }

        loadQuestion();
    }, [question_id]);

    return (
        <div className="detail-container">
            <Header detailHeader value={owner} />

            <section className="question-section">
                <strong>{subject}</strong>
                <p>{content}</p>
                <div className="action-buttons-container">
                    <AnswerModal data={question} />
                    <div className='actions-group'>
                        {isOwnerAndLoggedUserAndHasAsnwer(owner, loggedUser, numberOfAnswers) && (
                            <UpdateQuestionModal
                                value={question}
                                handleChange={HandleInputChange}
                                data={question}
                            />
                        )}
                        {isOnwerAndLoggedTheSameUser(owner, loggedUser) && <DeleteQuestionButton id={id} />}
                    </div>
                </div>
            </section>

            <ul className="answer-section">
                <div className="answer-divisor">
                    <span>{numberOfAnswers} Respostas</span>
                    <hr className='divisor' />
                </div>

                {numberOfAnswers === 0 ? (
                    <p style={{ height: '100vh' }}>
                        Não ha nenhuma resposta
                    </p>
                ) :
                    answers?.map(answer => <AnswerCard answer={answer} />)}
            </ul>
        </div>
    );
}

export default Detail;