import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route name='Dashboard' path='/' exact component={Dashboard} />
            <Route name='Register' path='/register' component={Register} />
        </Switch>
    </BrowserRouter>
);

export default Routes;