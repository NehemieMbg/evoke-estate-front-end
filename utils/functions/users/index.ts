'use server';

import axios from 'axios';
import { cookies } from 'next/headers';

export const getUserData = async () => {
  const accessToken = cookies().get('accessToken');

  try {
    if (!accessToken || !accessToken.value)
      throw new Error('No access token found');

    const response = await axios.get(`${process.env.EVOKE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${accessToken.value}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
