import axios from 'axios';
import LocalStorageService from './AxiosConfig/LocalStorageService';
const url = 'http://localhost:3333'

const localStorageService = LocalStorageService();
const { token } = localStorageService.GetToken();

const api = axios.create({
    baseURL: url,
});

api.interceptors.request.use(config => {
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
        return axios.post(`${url}/authenticate`, {
            'refresh-token': localStorageService.GetRefreshedToken()
        }).then(response => {
            if (response.status === 201) {
                localStorageService.SetToken(response.data.token, response.data.user);

                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                return axios(orginalRequest);
            }
        })
    }
    return Promise.reject(error);
});

export default api;