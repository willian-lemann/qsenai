import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';

import AuthenticatedRoute from './AuthenticatedRoute';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route name='Login' path='/login' component={Login} />
            <Route name='Register' path='/register' component={Register} />
            <AuthenticatedRoute name='Dashboard' path='/' exact component={Dashboard} />
        </Switch>
    </BrowserRouter>
);

export default Routes;