import React from 'react';
import api from '../../service/api';

import './index.css';

import { FiUser } from 'react-icons/fi';

import QuestionsNumberCard from '../QuestionsNumberCard';
import AddQuestionButton from '../AddQuestionButton';

import api from '../../service/api';

const Header: React.FC = () => {

    return (
        <div className="header-container">
            <QuestionsCard />
            <AddQuestionButton primary={true}> Lançar Pergunta </AddQuestionButton>
        </div>
    );
}

export default Header;