import React from 'react';

import './index.css';

import QuestionsNumberCard from '../QuestionsNumberCard';
import AddQuestionButton from '../AddQuestionButton';

const Header: React.FC = () => {

    return (
        <div className="header-container">
            <QuestionsNumberCard />
            <AddQuestionButton primary={true}> Lançar Pergunta </AddQuestionButton>
        </div>
    );
}

export default Header;