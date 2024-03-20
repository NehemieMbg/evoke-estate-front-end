import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StoreProvider from './providers/StoreProvider';
import { cookies } from 'next/headers';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let user;
  const accessToken = cookies().get('accessToken');

  if (accessToken && accessToken.value) {
    const response = await axios.get(`${process.env.EVOKE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${accessToken.value}`,
      },
    });
    user = response.data;
  } else {
    user = undefined;
  }

  console.log('User: ', user);

  return (
    <html lang="en">
      <StoreProvider user={user}>
        <body className={`${inter.className} bg-primary-100`}>{children}</body>
      </StoreProvider>
    </html>
  );
}
