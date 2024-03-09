import { createAxiosInstance } from "./axiosConfig";

export async function fetchData(url, methode, data, token) {
    try {
        const axiosInstance = createAxiosInstance(methode, token);
        const response = await axiosInstance(url, data);
        let responseObj = {
            success: true,
            message: 'Success',
            data: {
              ...response
          }
        }
        return Promise.resolve(responseObj);
    } catch (error) {
        let responseObj = {
            success: false,
            message: error,
            data: null
        }
        return Promise.reject(responseObj);
    }
}