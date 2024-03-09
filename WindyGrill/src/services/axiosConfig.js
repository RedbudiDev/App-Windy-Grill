import axios from 'axios';

const BASE_URL = 'https://magnetic.redbudi.com/rest/all/V1';

export const createAxiosInstance = (method, token) => {
    const instance = axios.create({
        baseURL: BASE_URL,
        method: method
    });

    instance.interceptors.request.use(config =>{
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        } 
        return config;
    }, error => {
        return Promise.reject(error);
    });

    instance.interceptors.response.use(
        response => response.data,
        error => Promise.reject(error)
    );

    return (url, data) => instance.request({
        url,
        method,
        data
    });
};