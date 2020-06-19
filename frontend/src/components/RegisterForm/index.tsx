import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import { FiLogIn } from 'react-icons/fi';

const RegisterForm: React.FC = () => {
    return (
        <form>
            <input type="text" placeholder='Digite seu nome' />
            <select name="graduation" id="graduation">
                <option value="0">Selecione uma opção</option>
                <option value="Telecom">Telecom</option>
                <option value="Redes de computadores">Redes de computadores</option>
                <option value="Analise e desenvolvimento de sistemas">Analise e desenvolvimento de sistemas</option>
            </select>
            <input type="password" placeholder='Login de usuário' />
            <input type="password" placeholder='Senha' />
            <div className="actions-container">
                <Link to='/login'>Voltar</Link>
                <button>Cadastrar <FiLogIn size={24} /></button>
            </div>
        </form>
    );
}

export default RegisterForm;