import axios from 'axios';

import LocalStorageService from './AxiosConfig/LocalStorageService';

const localStorageService = LocalStorageService();

const url = 'http://localhost:3333'

const api = axios.create({
    baseURL: url,
    headers: {
        'x-total-count': 1
    }
});

export default api;