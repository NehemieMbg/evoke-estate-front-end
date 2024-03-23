'use server';

import { AxiosError } from 'axios';
import { evokeReq } from '../functions/evokeApiReq';
import { redirect } from 'next/navigation';

const postNewPostAction = async (formData: FormData) => {
  try {
    await evokeReq.post('/posts', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error: AxiosError | any) {
    console.error('New post error: ', error.response.data);
    return { error: error.response.data.message };
  }
};

export default postNewPostAction;
