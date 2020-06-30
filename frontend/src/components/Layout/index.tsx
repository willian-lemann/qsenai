import React, { useState, useEffect } from 'react';
import api from '../../service/api';

import './index.css';

import QuestionCard from '../../components/QuestionCard';

interface Question {
    id: number,
    subject: string,
    content: string,
    owner: string,
}

interface QuestionResponse {
    id: number,
    subject: string,
    content: string,
    owner: string,
}

const Layout: React.FC = () => {
    const [questions, SetQuestions] = useState<Question[]>([])
    useEffect(() => {
        const loadQuestions = async () => {
            const response = await api.get<QuestionResponse[]>('/questions', {
                params: {
                    user_id: 2
                },
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNTkzMTM5MjM3LCJleHAiOjE1OTMyMjU2Mzd9.Lv6q_s4bxvIO1Asrwz0HZou0r2bGVJAl8t0Oy-q89wU'
                }
            });
            SetQuestions(response.data);
        }
        loadQuestions();
    }, []);

    return (
        <div className='layout-container'>
            {questions.map(question => (
                <QuestionCard key={question.id} question={question} />
            ))}
        </div>
    );
}

export default Layout;