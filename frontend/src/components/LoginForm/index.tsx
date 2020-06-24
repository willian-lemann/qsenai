import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../service/api';

import './index.css';


import { FiLogIn } from 'react-icons/fi';

const LoginForm: React.FC = () => {

    return (
        <form>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <div className="actions-container">
                <Link to='/register'>Não tem conta? Cadastre-se</Link>
                <button>Entrar <FiLogIn size={24} /></button>
            </div>
        </form>
    );
}

export default LoginForm;