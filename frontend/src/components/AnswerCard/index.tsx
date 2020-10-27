import React from 'react';

import './index.css';

interface AnswerCardProps {
    answer: {
        answerOwner: string,
        content: string
    }
}

const AnswerCard: React.FC<AnswerCardProps> = ({ answer: { answerOwner, content } }) => {
    return (
        <li className="answer-card-container">
            <strong>{answerOwner}</strong>
            <p>{content}</p>
        </li>
    );
}

export default AnswerCard;