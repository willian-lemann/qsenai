import React, { useState, useEffect } from 'react';

import './index.css';
import api from '../../service/api';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNTkzNTczNzQ5LCJleHAiOjE1OTM2NjAxNDl9.WpnSY0VHKh4dAIzOx7KQTfy7qoRE0SIoLHlfTl-2LVE';

const QuestionsNumberCard: React.FC = () => {
    const [questionsNumber, SetQuestionsNumber] = useState(0);


    useEffect(() => {
        const loadData = async () => {
            const response = await api.get('/questions', {
                params: {
                    user_id: 4,

                },
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });
            const countedQuestions = parseInt(response.headers['x-total-count']);

            SetQuestionsNumber(countedQuestions);
        }

        loadData();
    }, []);

    return (
        <div className="questions-card-container">
            <span>Perguntas</span>
            <p>{questionsNumber}</p>
        </div>
    ); 
}

export default QuestionsNumberCard;