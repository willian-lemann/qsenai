import React from 'react';

import './index.css';

import { Drawer, Theme } from '@material-ui/core';

interface DrawerProps {
    open: boolean
}

const DrawerNav: React.FC<DrawerProps> = ({ children, open }) => {

    return (
        <Drawer
            variant='persistent'
            anchor="left"
            open={open}
            container={() => window.document.body}
            classes={{ paper: 'drawerPaper', root: 'root' }}>
            {children}
        </Drawer>
    );
}

export default DrawerNav;