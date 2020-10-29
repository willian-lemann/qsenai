import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './index.css';


const QuestionsNumberCard: React.FC = () => {
    const [questionsNumber, SetQuestionsNumber] = useState(0);

    const loadQuestions = async () => {
        const response = await api.get('/questions');
        const countedQuestions = parseInt(response.headers['x-total-count']);
        console.log(countedQuestions)
        SetQuestionsNumber(countedQuestions);
    };

    useEffect(() => {
        loadQuestions();
    }, []);

    return (
        <div className="questions-card-container">
            <span>Perguntas</span>
            <p>{questionsNumber}</p>
        </div>
    );
}

export default QuestionsNumberCard;