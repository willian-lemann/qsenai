import React, { useState, useEffect } from 'react';
import api from '../../service/api';
import { orderBy } from 'lodash';

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

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTkzODI4MTU1LCJleHAiOjE1OTM5MTQ1NTV9.Zkd4-YW5I7blKgoEjNUckk1LkQk3u-prF61-mSaGs2s';

const Layout: React.FC = () => {
    const [questions, SetQuestions] = useState<Question[]>([]);

    const loadQuestions = async () => {
        const response = await api.get<QuestionResponse[]>('/questions', {
            params: {
                user_id: 4
            },
            headers: {
                Authorization: 'Bearer ' + token,
            }

        });
        SetQuestions(response.data);

    }

    useEffect(() => {
        loadQuestions();
    }, []);


    let filteredQuestions = orderBy(questions, [(question: Question) => question.content.toLowerCase()], ['asc']);

    return (
        <div className='layout-container'>
            <ul>
                {filteredQuestions.map((question: Question) => (
                    <QuestionCard key={question.id} question={question} />
                ))}
            </ul>
        </div>
    );
}

export default Layout;