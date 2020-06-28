import React, { useState } from 'react';

import './index.css';

import api from '../../service/api';

interface QuestionsCardProps {
    questionsNumber: number
}

const QuestionsNumberCard: React.FC = () => {

    const [questionsNumber, setQuestionsNumber] = useState(0); 

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNTkzMzg1NDE2LCJleHAiOjE1OTM0NzE4MTZ9.nI4TqvDrj6dHPar2N_5dSdpTUBTfz_11XDIe1S0wPJc';

    const config = {
        headers: { Authorization: 'Bearer ' + token }
    };

    const user_id = 9;

    api.get('/questions?user_id=' + user_id, config)
        .then(response => setQuestionsNumber (Number(response.data.length)));


    return (
        <div className="questions-card-container"> 
            <span>Perguntas</span>
            <p>{questionsNumber}</p>
        </div>
    );
}

export default QuestionsNumberCard;