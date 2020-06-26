import React from 'react';

import './index.css';

import { FiPlus } from 'react-icons/fi';

interface AddQuestionButton {
    primary: boolean
}

const AddQuestionButton: React.FC<AddQuestionButton> = ({ primary, children }) => {
    return (
        <button className={primary ? 'add-question-button' : 'add-question-button-secundary'}>
            <span>{children}</span>
            <FiPlus size={20} className='plusIcon' />
        </button>
    );
}

export default AddQuestionButton;