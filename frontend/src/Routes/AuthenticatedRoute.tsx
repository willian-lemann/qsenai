import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import LocalStorageService from '../service/AxiosConfig/LocalStorageService';

const localStorageService = LocalStorageService();

interface PrivateRouteProps {
    component: React.FC<any>,
    name: string,
    path: string,
    exact: boolean,
}

const token = localStorageService.GetToken();
let isAuthenticate = false;

if (token)
    isAuthenticate = true;

const AuthenticatedRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...otherProps }) => (
    <Route {...otherProps} render={props => (
        isAuthenticate ? (
            <Component {...props} />
        ) :
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
);

export default AuthenticatedRoute;