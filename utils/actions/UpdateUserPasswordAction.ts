'use server';

import { evokeReq } from '../functions/evokeApiReq';
import { AxiosError } from 'axios';

const updateUserPasswordAction = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  console.log(data);

  const requestData = {
    password: data.password,
    newPassword: data.newPassword,
    confirmPassword: data.confirmPassword,
  };

  try {
    const response = await evokeReq.put(
      '/users/me/updatePassword',
      requestData
    );
    // console.log(response.data);
  } catch (error: AxiosError | any) {
    console.log(error);
    const errorMsg = error.response.data.message;
    console.log(errorMsg);
    return { error: errorMsg };
  }
};

export default updateUserPasswordAction;
