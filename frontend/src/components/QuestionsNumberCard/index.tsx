import React, { useState, useEffect } from 'react';
import api from '../../service/api';

import './index.css';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNTkzNTU4ODYxLCJleHAiOjE1OTM2NDUyNjF9.-YIZmvEPKhuwTqs6vxQhEpVMv86bXzbcoohrUdW1eLc';

const QuestionsNumberCard: React.FC = () => {
    const [questionsNumber, SetQuestionsNumber] = useState(0);

    useEffect(() => {
        const loadData = async () => {
            const response = await api.get('/questions', {
                params: {
                    user_id: 4
                },
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });

            SetQuestionsNumber(response.data.length);
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