import axios from 'axios';
import { cookies } from 'next/headers';

const accessToken = cookies().get('accessToken');

export const evokeReq = axios.create({
  baseURL: 'http://localhost:5454/api/v1',
  headers: {
    Authorization: `Bearer ${accessToken?.value}`,
  },
});
