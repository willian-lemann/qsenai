import React from 'react';

import './index.css';

import RegisterForm from '../../components/RegisterForm';

import Logo from '../../components/Logo'


const Register: React.FC = () => {
    return (
        <div className="register-container">
            <div className="register-content">
                <Logo />
                <section className="form-container">
                    <RegisterForm />
                </section>
            </div>
        </div>
    );
}

export default Register;