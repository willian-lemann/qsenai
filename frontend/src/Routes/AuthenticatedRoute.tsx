import React from 'react';
import { Route, Redirect } from 'react-router-dom'

interface PrivateRouteProps {
    component: React.FC<any>,
    name: string,
    path: string,
    exact: boolean,
}

const isAuthenticate = false;

const AuthenticatedRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...otherProps }) => (
    <Route {...otherProps} render={props => (
        isAuthenticate ? (
            <Component {...props} />
        ) :
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
);

export default AuthenticatedRoute;