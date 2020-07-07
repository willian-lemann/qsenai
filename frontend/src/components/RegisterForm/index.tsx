import React, {
    useState,
    FormEvent,
    ChangeEvent
} from 'react';
import { Link, useHistory } from 'react-router-dom';
import LocalStorageService from '../../service/AxiosConfig/LocalStorageService';

import './index.css';

import { FiLogIn } from 'react-icons/fi';
import api from '../../service/api';

interface UserRegisterResponse {
    newUser: {
        name: string,
    },
    token: string
}

const RegisterForm: React.FC = () => {
    const history = useHistory();
    const localStorageService = LocalStorageService();
    const [selectedGraduation, SetSelectedGraduation] = useState('');
    const [formData, SetFormData] = useState({
        name: '',
        email: '',
        password: '',
        graduation: ''
    });

    const HandleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        SetFormData({ ...formData, [name]: value });
    }

    const HandleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        SetSelectedGraduation(value);
    }

    const HandleRegister = async (event: FormEvent) => {
        event.preventDefault();

        const { name, email, password } = formData;

        const graduation = selectedGraduation;

        const data = {
            name,
            email,
            password,
            graduation
        }

        try {
            const response = await api.post<UserRegisterResponse>('/register', data);
            const { newUser: { name }, token } = response.data;

            localStorageService.SetToken(token, name);
            history.push('/');

        } catch (error) {
            localStorageService.ClearToken();
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
                <option value="0">Selecione seu curso</option>
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