import axios, { AxiosRequestConfig } from 'axios';
import LocalStorageService from './AxiosConfig/LocalStorageService';
const localStorageService = LocalStorageService();

const api = axios.create({
    baseURL: 'http://localhost:3333',
})

