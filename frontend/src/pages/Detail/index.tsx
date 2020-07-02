import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import api from '../../service/api';

import './index.css';

import Header from '../../components/Header';

interface Answer {
    content: string
}

interface Question {
    subject: string,
    content: string,
    owner: string,
    answers: Answer[]
}

interface QuestionResponse {
    subject: string,
    content: string,
    owner: string,
    answers: Answer[]
}
const Detail: React.FC = () => {
    const { id } = useParams();

    const [question, SetQuestion] = useState<Question>();

    useEffect(() => {
        const loadQuestion = async () => {
            const response = await api.get(`/questions/${id}`, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNTkzNTY3MjYzLCJleHAiOjE1OTM2NTM2NjN9.pov8vojETkZOKRCxNuxq3MKUBZH0NWaezdSiQA8w0_8'
                }
            });

            SetQuestion(response.data);
            console.log(response.data)
        }

        loadQuestion();
    }, []);

    return (
        <div className="detail-container">
            <Header detailHeader />


        </div>
    );
}

export default Detail;