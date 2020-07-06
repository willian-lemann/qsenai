import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import api from '../../service/api';

import './index.css';

import Header from '../../components/Header';
import Button from '../../components/shared/Button';
import AnswerCard from '../../components/AnswerCard';
import AnswerModal from '../../components/AnswerModal';


interface Answer {
    content: string
    owner: string
}

interface Question {
    question: {
        id: number,
        subject: string,
        content: string,
        owner: string,
    }
    answers: Answer[]
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
    const { id } = useParams();
    const [question, SetQuestion] = useState<Question>();
    const subject = question?.question.subject;
    const content = question?.question.content;
    const owner = question?.question.owner;
    const answers = question?.answers;
    const numberOfAnswers = answers?.length;
    const questionToAnswer = {
        id: question?.question.id,
        subject: question?.question.subject,
        content: question?.question.content
    }

    const loadQuestion = async () => {
        const response = await api.get<QuestionResponse>(`/questions/${id}`, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTkzODMzNTc2LCJleHAiOjE1OTM5MTk5NzZ9.kd_BSPPAmfOdQsIAr9TrOq2PzdqVpmAmLMUBIeWThng'
            }
        });

        console.log(response.data);
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
                {/* <Button value='Responder' /> */}
                <AnswerModal question={questionToAnswer}/>
            </section>
            <ul className="answer-section" >
                <div className="answer-divisor">
                    <span>{numberOfAnswers} Respostas</span>
                    <hr className='divisor' />
                </div>
                {numberOfAnswers === 0 && (
                    <p style={{ height: '100vh' }}>
                        Não ha nenhuma resposta
                    </p>
                )}
                {answers?.map(answer => (
                    <AnswerCard answer={answer} />
                ))}
            </ul>
        </div>
    );
}

export default Detail;