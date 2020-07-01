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

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNTkzNTczNzQ5LCJleHAiOjE1OTM2NjAxNDl9.WpnSY0VHKh4dAIzOx7KQTfy7qoRE0SIoLHlfTl-2LVE';

const Layout: React.FC = () => {
    const [questions, SetQuestions] = useState<Question[]>([]);
    const [page, setPage] = useState(1);


    useEffect(() => {
        const loadQuestions = async () => {
            const response = await api.get<QuestionResponse[]>('/questions', {
                params: {
                    user_id: 4,
                    page
                },
                headers: {
                    Authorization: 'Bearer ' + token,
                }

            });
            SetQuestions(response.data);
        }
        loadQuestions();

    }, [page]);

    const HandlePageChange = (pageNumber: number) => {
        setPage(pageNumber);
    }

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