import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import './index.css'

import LocalStorageService from '../../services/AxiosConfig/LocalStorageService';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { GoChevronLeft } from 'react-icons/go';
import { FiUser, FiLogOut } from 'react-icons/fi';

import UserHeader from '../UserHeader';

const drawerWidth = 270;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
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
            width: '100%',
        },
    }),
);

const DrawerNav: React.FC = ({ children }) => {
    const localStorageService = LocalStorageService();
    const classes = useStyles();
    const [isOpen, SetIsOpen] = useState(true);
    const [loggedUser, SetLoggedUser] = useState<string | null>('');

    const ClearLocalStorage = () => {
        localStorageService.ClearToken();
    };

    useEffect(() => {
        const { user } = localStorageService.GetToken();
        SetLoggedUser(user);
    }, [localStorageService]);

    return (
        <div className={classes.root}>
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
                        <UserHeader user={loggedUser}>
                            <GoChevronLeft className='arrowLeftIcon' onClick={() => SetIsOpen(!isOpen)} />
                        </UserHeader>
                        <footer>
                            <Link to='/login' onClick={ClearLocalStorage}>
                                Logout
                             <FiLogOut className='logoutIcon' size={20} color='black' />
                            </Link>
                        </footer>
                    </div>
                </div>

            </Drawer>

            <main className={classes.content}>
                {children}
            </main>
        </div>
    );
}

export default DrawerNav;
