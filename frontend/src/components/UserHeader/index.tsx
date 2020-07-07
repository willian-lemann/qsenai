import React from 'react';

import './index.css';

interface UserHeaderProps {
    user: string | null
}

const UserHeader: React.FC<UserHeaderProps> = ({ children: Button, user }) => {
    return (
        <div className="user-info-section">
            <div className='user-info-content'>
                <span>{user}</span>
                <p>On-line</p>
            </div>
            {Button}
        </div>

    );
}

export default UserHeader;