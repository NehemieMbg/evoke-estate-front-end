import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';
import { request } from './functions/evokeApiReq';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        console.log(credentials);

        if (!username || !password) {
          throw new Error('Username and password are required');
        }

        const response = await request.post('/auth/login', credentials);
        const user = response.data;

        console.log(user);

        if (!user) {
          throw new Error('The username or password you entered is incorrect');
        }

        return user;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      console.log(token, user);

      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    session: async ({ session, token }) => {
      console.log(session, token);
      session.user = token;
      return session;
    },
  },
  debug: process.env.NODE_ENV === 'development',
};
