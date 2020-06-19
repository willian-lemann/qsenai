import React from 'react';

import './index.css';

import Header from '../../components/Header';

interface DataProps {
    id: number,
    title: string,
    price: string
}

const Dashboard: React.FC = () => {
    const data: DataProps = {
        id: 1,
        title: 'qsenai',
        price: '2000',
    }
    return (
        <Header data={data} />
    );
}

export default Dashboard;