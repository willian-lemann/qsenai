import React, { useState } from 'react';

import './index.css';

import api from '../../service/api';

interface QuestionsCardProps {
    questionsNumber: number
}

const QuestionsNumberCard: React.FC = () => {

    const [questionsNumber, setQuestionsNumber] = useState(0);

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNTkzNDc3MDY5LCJleHAiOjE1OTM1NjM0Njl9.15XDJn7DdDgwXb0KDbY2pVVreZ6JGeJzqcCukw4zRb0';
    const config = {
        headers: { Authorization: `Bearer ${ token }` }
    };

    const user_id = 2;

    api.get('/questions?user_id=' + user_id, config)
        .then(response => setQuestionsNumber(Number(response.data.length)));


    return (
        <div className="questions-card-container">
            <span>Perguntas</span>
            <p>{questionsNumber}</p>
        </div>
    );
}

export default QuestionsNumberCard;