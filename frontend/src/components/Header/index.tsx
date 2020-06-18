import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

import Menu from 'react-hamburger-menu';

import Button from '../Button';

interface HeaderProps {
    title: string,
}

const Header: React.FC<HeaderProps> = ({ title }) => {

    return (
        <header>
            <Menu
                color='#ffff'
                isOpen={false}
                menuClicked={() => { }}
                rotate={0}
                animationDuration={0.4}
            />
            <h1>{title}</h1>
            <Link to='/register'>
                <Button />
            </Link>
        </header>
    )
}


export default Header;