import React from 'react';
import { useHistory } from 'react-router-dom';

import './index.css';

interface QuestionCardProps {
    question: {
        id: number,
        subject: string,
        content: string,
        owner: string,
    }
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question: { id, subject, content } }) => {
    const history = useHistory();
    const previewedContent = content !== undefined && content.substring(0, 28);

    const HandleDetail = (questionId: number) => {
        history.push(`/detail/${questionId}`);
    }

    return (
        <li key={id} className='question-card-container' onClick={() => HandleDetail(id)}>
            <strong>{subject}</strong>
            <p>{previewedContent}...</p>
        </li>
    );
}

export default QuestionCard;