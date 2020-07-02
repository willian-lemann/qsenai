import React from 'react';

import './index.css';

import QuestionsNumberCard from '../QuestionsNumberCard';
import AddQuestionButton from '../AddQuestionButton';

interface HeaderProps {
    detailHeader?: boolean,
    value?: string
}

const Header: React.FC<HeaderProps> = ({ detailHeader }) => {


    return (
        <div className="header-container">
            {detailHeader ?
                <div>teste</div> :
                [
                    <QuestionsNumberCard />,
                    <AddQuestionButton primary> Lançar Pergunta </AddQuestionButton>
                ]}
        </div>
    );
}

export default Header;