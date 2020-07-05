import axios from 'axios';
import LocalStorageService from './AxiosConfig/LocalStorageService';


const localStorageService = LocalStorageService();

const url = 'http://localhost:3333'

const api = axios.create({
    baseURL: url,
});

api.interceptors.request.use(config => {
    const token = localStorageService.GetToken();

    if (token)
        config.headers['Authorization'] = `Bearer ${token}`;

    return config;

}, error => {
    Promise.reject(error);
});

api.interceptors.response.use(response => {
    return response;
}, error => {

    const orginalRequest = error.config;

    if (error.response?.status === 401 && !orginalRequest._retry) {

        orginalRequest._retry = true;
        return axios.post('http://localhost:3333/authenticate', {
            'refresh-token': localStorageService.GetRefreshedToken()
        }).then(response => {
            if (response.status === 201) {
                localStorageService.SetToken(response.data);

                axios.defaults.headers.common['Authorization'] = `Bearer ${localStorageService.GetToken()}`;
                return axios(orginalRequest);
            }
        })
    }
    return Promise.reject(error);
});

export default api;