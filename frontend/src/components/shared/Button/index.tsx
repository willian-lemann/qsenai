import React from 'react';

import './index.css';

interface ButtonProps {
    value: string
}

const Button: React.FC<ButtonProps> = ({ value }) => {
    return (
        <button className='button'> {value} </button>
    );
}

export default Button;