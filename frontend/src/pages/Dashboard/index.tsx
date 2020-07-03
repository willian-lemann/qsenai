import React from 'react';

import './index.css';

import Layout from '../../components/Layout';
import Header from '../../components/Header';

import AnswerModal from '../../components/AnswerModal';

const Dashboard: React.FC = () => {

    const pergunta = {
        id: 3,
        subject: 'assunto da pergunta',
        content: 'teste de conteudo de pergunta'
    }

    return (
        <div className="dashboard-container">
            <Header />
            <AnswerModal question={pergunta}/>
            <Layout />
        </div>
    );
}

export default Dashboard;