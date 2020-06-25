import React, { useState } from 'react';

import './index.css';

import Header from '../../components/Header';

import QuestionForm from '../../components/QuestionForm';

const Dashboard: React.FC = () => {


    return (
        <div className="dashboard-container">
            <Header />
            <QuestionForm />
        </div>
    );
}

export default Dashboard;