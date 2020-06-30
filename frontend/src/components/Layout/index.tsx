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

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNTkzNTU4ODYxLCJleHAiOjE1OTM2NDUyNjF9.-YIZmvEPKhuwTqs6vxQhEpVMv86bXzbcoohrUdW1eLc';

const Layout: React.FC = () => {
    const [questions, SetQuestions] = useState<Question[]>([])
    useEffect(() => {
        const loadQuestions = async () => {
            const response = await api.get<QuestionResponse[]>('/questions', {
                params: {
                    user_id: 4
                },
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });
            SetQuestions(response.data);
        }
        loadQuestions();
    }, []);

    return (
        <div className='layout-container'>
            <ul>
                {questions.map(question => (
                    <QuestionCard key={question.id} question={question} />
                ))}
            </ul>
        </div>
    );
}

export default Layout;