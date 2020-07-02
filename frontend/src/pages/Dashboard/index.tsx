import React, { useState } from 'react';

import './index.css';

import Layout from '../../components/Layout';
import Header from '../../components/Header';

import QuestionForm from '../../components/QuestionForm';

const Dashboard: React.FC = () => {

    return (
        <div className="dashboard-container">
            <Header />
            <Layout />
        </div>
    );
}

export default Dashboard;