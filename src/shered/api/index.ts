import axios from 'axios';


export const API_URL = 'https://jsonplaceholder.typicode.com/';
  // import.meta.env.VITE_BASE_URL;

export const apiAxios = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  timeout: 10000
});