import React from 'react';

import './index.css';

import { FiUser } from 'react-icons/fi';

import QuestionsCard from '../QuestionsNumberCard';
import AddQuestionButton from '../AddQuestionButton';

const Header: React.FC = () => {

    return (
        <div className="header-container">
            <QuestionsCard questionsNumber={2} />
            <AddQuestionButton primary={true}> Lançar Pergunta </AddQuestionButton>
        </div>

    );
}

export default Header;