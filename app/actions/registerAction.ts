'use server';

import axios from 'axios';

export const registerAction = async (formData: FormData) => {
  const data = Object.fromEntries(formData);

  try {
    const response = await axios.post('/auth/register', data);
    console.log(response);
  } catch (error) {}
};
