import React, { useState, FormEvent, ChangeEvent  } from 'react';
import { Link } from 'react-router-dom';
import api from '../../service/api';

import './index.css';

import { FiLogIn } from 'react-icons/fi';

interface NewUser {
    user: {
        name: string,
        email: string,
        graduation: string
    },
    token: string
}

const RegisterForm: React.FC = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        graduation: '',
    });

    const HandleRegister = async (event: FormEvent) => {
        event.preventDefault();

        const { name, email, password, graduation } = formData;
    
        const data = { name, email, password, graduation };

        console.log(data);

    
        // data.append('name', name);
        // data.append('email', email);
        // data.append('password', password);
        // data.append('graduation', graduation);
    
        // const response = await api.get('/register');
    
        // setUser(response.data);
    
    
        alert('Registo criado com sucesso');
    }

    const HandleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value }=event.target;
        setFormData({ ...formData, [name] :  value});
    }

    const HandleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { name, value }=event.target;
        setFormData({ ...formData, [name]: value });
    }
    
    return (
        <form onSubmit={HandleRegister}>
            <input
                type="text"
                name='name'
                placeholder='Digite seu nome' 
                onChange={HandleInputChange}
            />
            <select name="graduation"  id="graduation" onChange={HandleSelectChange}>
                <option value="0">Selecione uma opção</option>
                <option value="Telecom">Telecom</option>
                <option value="Redes de computadores">Redes de computadores</option>
                <option value="Analise e desenvolvimento de sistemas">Analise e desenvolvimento de sistemas</option>
            </select>
            <input type="text"
                placeholder='Email de usuário'
                name='email'
                onChange={HandleInputChange}
            />
            <input type="password"
                name='password'
                placeholder='Senha'
                onChange={HandleInputChange}
            />
            <div className="actions-container">
                <Link to='/login'>Voltar</Link>
                <button>Cadastrar <FiLogIn size={24} /></button>
            </div>
        </form>
    );
}

export default RegisterForm;