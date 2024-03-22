'use server';

import { AxiosError } from 'axios';
import { evokeReq } from '../functions/evokeApiReq';

const removeAvatarAction = async () => {
  try {
    const response = await evokeReq.get('/me/avatar/delete');

    console.log('Avatar Removed: ', response.data);
  } catch (error: AxiosError | any) {
    console.error('Error updating avatar: ', error.response.data);
  }
};

export default removeAvatarAction;
