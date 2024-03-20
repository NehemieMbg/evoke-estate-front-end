// client action
import axios from 'axios';

const signIn = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  try {
    await axios.post('/api/auth/login', {
      username,
      password,
    });
  } catch (error) {
    console.error(error);
    return { error: 'incorrect E-mail,Username or password.' };
  }
};

export default signIn;
