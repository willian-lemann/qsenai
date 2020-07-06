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


const Layout: React.FC = () => {
    const [questions, SetQuestions] = useState<Question[]>([]);

    const loadQuestions = async () => {
        const response = await api.get<QuestionResponse[]>('/questions', {
            params: {
                user_id: 4
            },
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