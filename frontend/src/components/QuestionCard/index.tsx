import React from 'react';

import './index.css';

interface QuestionCardProps {
    question: {
        id: number,
        subject: string,
        content: string,
        owner: string,
    }
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question: { subject, content } }) => {
    const previewedContent = content.substring(0, 28);

    return (
        <li className='question-card-container'>
            <strong>{subject}</strong>
            <p>{previewedContent}...</p>
        </li>
    );
}

export default QuestionCard;