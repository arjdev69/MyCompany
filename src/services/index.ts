import axios from 'axios';
import {URL} from 'utils/Constants';

const api = axios.create({
  baseURL: URL.main,
});

export const server = axios.create({
  baseURL: URL.server,
});

export default api;
