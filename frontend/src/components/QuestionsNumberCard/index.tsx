import React from 'react';

import './index.css';

interface QuestionsCardProps {
    questionsNumber: number
}

const QuestionsNumberCard: React.FC<QuestionsCardProps> = ({ questionsNumber }) => {

    return (
        <div className="questions-card-container"> 
            <span>Perguntas</span>
            <p>{questionsNumber}</p>
        </div>
    );
}

export default QuestionsNumberCard;