import axios from 'axios';
import { getAccessToken } from '../token';

export const evokeReq = axios.create({
  baseURL: 'http://localhost:5454/api/v1',
  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
  },
});
