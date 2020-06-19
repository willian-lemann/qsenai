import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

import Menu from 'react-hamburger-menu';

interface HeaderProps {
    data: {
        id: number,
        title: string,
        price: string,
    }
}

const Header: React.FC<HeaderProps> = ({ data }) => {

    return (
        <header>
            <Menu
                color='#ffff'
                isOpen={false}
                menuClicked={() => { }}
                rotate={0}
                animationDuration={0.4}
            />
            <h1>{data.title}</h1>
            <Link to='/register'>

            </Link>
        </header>
    )
}


export default Header;