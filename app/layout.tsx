'use client';

import './globals.css';
import { AuthProvider } from './context/AuthContext';
import { ProfileProvider } from './context/ProfileContext';
import React from 'react';
import { UserProvider } from './context/UserContext';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={inter.className}>
      <Head>
        <title>WearShare</title>
        <meta name="description" content="Your one-stop shop for trendy clothing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <AuthProvider>
          <ProfileProvider>
            <UserProvider>
              {children}
            </UserProvider>
          </ProfileProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
