import React, { useState } from 'react';


import './index.css';


import Menu from 'react-hamburger-menu';
import DrawerNav from '../DrawerNav';
import { GoChevronLeft } from 'react-icons/go';

const Header: React.FC = () => {

    const [isOpen, SetIsOpen] = useState(true)
    return (
        <>
            <DrawerNav open={isOpen}>
                <div className="drawer-container">
                    <section className="user-info-section">
                        <div className='user-info-content'>
                            <span>Willian Leman Rocha</span>
                            <p> * On-line</p>
                        </div>
                        <GoChevronLeft size={20} className='arrowLeftIcon' onClick={() => SetIsOpen(!isOpen)} />
                    </section>
                </div>
            </DrawerNav>

            <header

                className='header-container'>
                <div className='menu-container'>
                    <Menu
                        color='orange'
                        isOpen={isOpen}
                        menuClicked={() => SetIsOpen(!isOpen)}
                        animationDuration={0.4}
                        rotate={1} />
                </div>
            </header>
        </>
    )
}

export default Header;