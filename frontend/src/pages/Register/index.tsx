import React from 'react';

import './index.css';

import logo from '../../assets/logo-senai.png';

import RegisterForm from '../../components/RegisterForm';

const Register: React.FC = () => {
    return (
        <div className="register-container">
            <div className="register-content">
                <section>
                    <img src={logo} alt="logo senai" />
                </section>

                <section className="form-container">
                    <RegisterForm />
                </section>
            </div>
        </div>
    );
}

export default Register;