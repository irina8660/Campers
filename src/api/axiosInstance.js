import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
