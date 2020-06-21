import React, {
    useState,
    FormEvent,
    ChangeEvent
} from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import { FiLogIn } from 'react-icons/fi';

const RegisterForm: React.FC = () => {
    const [selectedGraduation, SetSelectedGraduation] = useState('');
    const [formData, SetFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const HandleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        SetFormData({ ...formData, [name]: value });
        console.log(formData)
    }

    const HandleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        SetSelectedGraduation(value);
    }

    const HandleRegister = (event: FormEvent) => {
        event.preventDefault();

        const { name, email, password } = formData;

        const data = {
            name,
            email,
            password,
            selectedGraduation
        }


    }

    return (
        <form onSubmit={HandleRegister}>
            <input
                name='name'
                type="text"
                placeholder='Digite seu nome'
                onChange={HandleInputChange}
            />
            <select name="graduation" id="graduation" onChange={HandleSelectChange}>
                <option value="0">Selecione uma opção</option>
                <option value="Telecom">Telecom</option>
                <option value="Redes de computadores">Redes de computadores</option>
                <option value="Analise e desenvolvimento de sistemas">Analise e desenvolvimento de sistemas</option>
            </select>
            <input
                name='email'
                type="email"
                placeholder='Digite seu e-mail'
                onChange={HandleInputChange}
            />
            <input
                name='password'
                type="password"
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