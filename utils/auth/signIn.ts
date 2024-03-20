import axios from 'axios';

const signIn = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  try {
    const response = await axios.post('/api/auth/login', {
      username,
      password,
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export default signIn;
