import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import api from '../../service/api';

import './index.css';

import Header from '../../components/Header';
import Button from '../../components/shared/Button';
import AnswerCard from '../../components/AnswerCard';
import AnswerModal from '../../components/AnswerModal';


interface Answer {
    content: string,
    question_id: number,
    answerOwner: string
}

interface Question {
    id?: number,
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
const Detail: React.FC = () => {
    const { id: question_id } = useParams();
    const [question, SetQuestion] = useState<Question>({});
    const [answers, SetAnswers] = useState<Answer[]>();
    const numberOfAnswers = answers?.length;
    const { id, subject, content, owner } = question;

    const loadQuestion = async () => {
        const response = await api.get<QuestionResponse>(`/questions/${question_id}`);
        SetQuestion(response.data.question);
        SetAnswers(response.data.answers)
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
                <AnswerModal data={question} />
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