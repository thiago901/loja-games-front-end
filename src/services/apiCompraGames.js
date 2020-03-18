import axios from 'axios';

const api = axios({
  baseURL: 'http://localhost:8084/compra-games/',
});

export default api;
