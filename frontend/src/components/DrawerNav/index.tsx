import React, { useState } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import { GoChevronLeft } from 'react-icons/go';

import './index.css'

import Header from '../Header';
import UserHeader from '../UserHeader';
import { FiUser } from 'react-icons/fi';

const drawerWidth = 270;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },

        appBar: {
            zIndex: theme.zIndex.appBar + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            height: 80,
        },

        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
        },

        hide: {
            display: 'none',
        },

        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },

        drawerOpen: {
            width: drawerWidth,
            background: '#FF5617',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },

        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
            background: '#FF5617',
        },

        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ...theme.mixins.toolbar,
        },

        content: {
            background: '#f0f0f0',
            width: '100%',

        },
    }),
);

const DrawerNav: React.FC = ({ children }) => {
    const classes = useStyles();
    const [isOpen, SetIsOpen] = useState(true);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, { [classes.appBarShift]: isOpen })}>
                <Header />
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: isOpen,
                    [classes.drawerClose]: !isOpen,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: isOpen,
                        [classes.drawerClose]: !isOpen,
                    }),
                }}>
                <div className={classes.toolbar}>

                    {!isOpen &&
                        <div className="user-icon-container">
                            <FiUser
                                size={30}
                                onClick={() => SetIsOpen(true)}
                                className='userIcon'
                                color='white' />
                        </div>
                    }

                    <div className={!isOpen ? classes.hide : 'drawer-container'}>
                        <UserHeader>
                            <GoChevronLeft className='arrowLeftIcon' onClick={() => SetIsOpen(!isOpen)} />
                        </UserHeader>
                    </div>
                </div>

            </Drawer>

            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    );
}

export default DrawerNav;
