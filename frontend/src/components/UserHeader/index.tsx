import React from 'react';

import './index.css';



const UserHeader: React.FC = ({ children: Button }) => {
    return (
        <div className="user-info-section">
            <div className='user-info-content'>
                <span>Willian Leman Rocha</span>
                <p>On-line</p>
            </div>
            {Button}
        </div>

    );
}

export default UserHeader;