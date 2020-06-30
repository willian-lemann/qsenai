import React, { useState } from 'react';

import './index.css';

import Layout from '../../components/Layout';
import DrawerNav from '../../components/DrawerNav';

import QuestionForm from '../../components/QuestionForm';

const Dashboard: React.FC = () => {

    return (
        <div className="dashboard-container">
            <DrawerNav>
                <Layout />
            </DrawerNav>
        </div>
    );
}

export default Dashboard;