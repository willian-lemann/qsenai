import React from 'react';

import './index.css';

interface AnswerCardProps {
    answer: {
        owner: string,
        content: string
    }
}

const AnswerCard: React.FC<AnswerCardProps> = ({ answer: { owner, content } }) => {
    return (
        <li className="answer-card-container">
            <strong>{owner}</strong>
            <p>{content}</p>
        </li>
    );
}

export default AnswerCard;