import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://api-compre-games.herokuapp.com/',
  // baseURL: 'https://backend-node-compragames.herokuapp.com/',
  baseURL: 'http://localhost:3333/',
});

export default api;
