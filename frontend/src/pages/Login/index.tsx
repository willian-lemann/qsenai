import React from 'react';
import './index.css';

import logo from '../../assets/logo-senai.png';

import LoginForm from '../../components/LoginForm';

const Login: React.FC = () => {

    return (
        <div className="login-container">
            <div className="login-content">
                <section>
                    <img src={logo} alt="logo senai" />
                </section>

                <section className="form-container">
                    <LoginForm />
                </section>
            </div>
        </div>
    );
}

export default Login;