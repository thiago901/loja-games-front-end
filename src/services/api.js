import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-compre-games.herokuapp.com/',
});

export default api;
