import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import LocalStorageService from "../../services/AxiosConfig/LocalStorageService";

import "./index.css";

import { FiLogIn } from "react-icons/fi";

interface UserCredencials {
  email: string;
  password: string;
}

interface UserResponse {
  user: {
    name: string;
  };
  token: string;
}

const LoginForm: React.FC = () => {
  const history = useHistory();
  const localStorageService = LocalStorageService();

  const [userCredencialsFormData, SetUserCredencialsFormData] = useState<
    UserCredencials
  >({
    email: "",
    password: "",
  });

  const HandleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    SetUserCredencialsFormData({ ...userCredencialsFormData, [name]: value });
  };

  const HandleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { email, password } = userCredencialsFormData;

    const data = {
      email,
      password,
    };

    try {
      const response = await api.post<UserResponse>("/authenticate", data);
      const {
        user: { name },
        token,
      } = response.data;
      localStorageService.SetToken(token, name);
      history.push("/");
    } catch (error) {
      localStorageService.ClearToken();
    }
  };

  return (
    <form onSubmit={HandleSubmit}>
      <input
        required
        name="email"
        type="text"
        placeholder="Usuário"
        onChange={HandleInputChange}
      />

      <input
        required
        name="password"
        type="password"
        placeholder="Senha"
        onChange={HandleInputChange}
      />
      <div className="actions-container">
        <Link to="/register">Não tem conta? Cadastre-se</Link>
        <button>
          Entrar <FiLogIn size={24} />
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
