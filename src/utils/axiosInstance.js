import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8017/v1',
});

export default instance;
