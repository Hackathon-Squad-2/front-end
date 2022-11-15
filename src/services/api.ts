import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

interface AxiosConfig {
  config: {
    headers: {
      authorization: string;
    }
  }
}

api.interceptors.request.use((config: any) => {
  const token = localStorage.getItem('@hackathon:token')

  if (token) {
    // ts-noverify
    config.headers.authorization = `Bearer ${token}`;
  }

  return config
})
