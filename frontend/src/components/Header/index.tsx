import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import { FiArrowLeft } from 'react-icons/fi';

import QuestionsNumberCard from '../QuestionsNumberCard';
import AddQuestion from '../AddQuestion';

interface HeaderProps {
    detailHeader?: boolean,
    value?: string
}

const Header: React.FC<HeaderProps> = ({ detailHeader, value }) => {


    return (
        <div className="header-container">
            {
                detailHeader ?
                    <>
                        <section className='header-content'>
                            <strong>{value}</strong>
                        </section>
                        <Link to='/'>
                            <FiArrowLeft size={28} />
                            <span>Voltar a tela principal</span>
                        </Link>
                    </>
                    :
                    [
                        <QuestionsNumberCard />,
                        <AddQuestion value='Lançar Pergunta' />
                    ]
            }
        </div>
    );
}

export default Header;