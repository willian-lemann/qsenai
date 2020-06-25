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
import Menu from 'react-hamburger-menu';
import { GoChevronLeft } from 'react-icons/go';

import './index.css'

import Header from '../../components/Header';

const drawerWidth = 300;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            background: '#FF5617',
        },

        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },

        menuButton: {
            marginRight: 36,
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
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
        },
    }),
);

const MiniDrawer: React.FC = ({ children }) => {

    const classes = useStyles();
    const theme = useTheme();
    const [isOpen, SetIsOpen] = useState(true);

    const handleDrawerOpen = () => {
        SetIsOpen(true);
    };

    const handleDrawerClose = () => {
        SetIsOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: isOpen,
                })}>

                <Toolbar>
                    {!isOpen && <Menu
                        color='white'
                        isOpen={isOpen}
                        menuClicked={() => SetIsOpen(!isOpen)}
                        animationDuration={0.4}
                        rotate={1} />}

                    <Header />
                </Toolbar>
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
                }}
            >
                <div className={classes.toolbar}>
                    <div className={!isOpen ? classes.hide : 'drawer-container'}>
                        <section className="user-info-section">
                            <div className='user-info-content'>
                                <span>Willian Leman Rocha</span>
                                <p> * On-line</p>
                            </div>
                            <GoChevronLeft className='arrowLeftIcon' onClick={() => SetIsOpen(!isOpen)} />
                        </section>
                    </div>
                </div>
            </Drawer>
            <main>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    );
}

export default MiniDrawer;
