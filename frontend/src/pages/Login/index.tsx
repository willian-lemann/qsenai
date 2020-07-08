import React from 'react';

import './index.css';

import LoginForm from '../../components/LoginForm';
import Logo from '../../components/shared/Logo'

const Login: React.FC = () => {

    return (
        <div className="login-container">
            <div className="login-content">
                <Logo />

                <section className="form-container">
                    <LoginForm />
                </section>
            </div>
        </div>
    );
}

export default Login;