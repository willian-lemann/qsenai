import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import api from '../../service/api';

import './index.css';

import Header from '../../components/Header';
import Button from '../../components/shared/Button';
import AnswerCard from '../../components/AnswerCard';

interface Answer {
    content: string
    owner: string
}

interface Question {
    question: {
        subject: string,
        content: string,
        owner: string,
    }
    answers: Answer[]
}

interface QuestionResponse {
    question: {
        subject: string,
        content: string,
        owner: string,
    }
    answers: Answer[]
}
const Detail: React.FC = () => {
    const { id } = useParams();
    const [question, SetQuestion] = useState<Question>();
    const subject = question?.question.subject;
    const content = question?.question.content;
    const owner = question?.question.owner;
    const answers = question?.answers;
    const numberOfAnswers = answers?.length;

    const loadQuestion = async () => {
        const response = await api.get<QuestionResponse>(`/questions/${id}`);

        SetQuestion(response.data);
    }

    useEffect(() => {
        loadQuestion();
    }, []);

    return (
        <div className="detail-container">
            <Header detailHeader value={owner} />

            <section className="question-section">
                <strong>{subject}</strong>
                <p>{content}</p>
                <Button value='Responder' />
            </section>
            <ul className="answer-section" >
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