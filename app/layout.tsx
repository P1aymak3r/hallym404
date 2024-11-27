'use client';

import './globals.css';
import React from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { AuthProvider } from './context/AuthContext';
import { ProfileProvider } from './context/ProfileContext';
import { UserProvider } from './context/UserContext';

// Google Font 설정
const inter = Inter({ subsets: ['latin'] });

/**
 * RootLayout: 애플리케이션의 글로벌 레이아웃 컴포넌트
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={inter.className}>
      <Head>
        {/* 글로벌 메타데이터 설정 */}
        <title>WearShare</title>
        <meta name="description" content="Your one-stop shop for trendy clothing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        {/* Context Providers */}
        <AuthProvider>
          <ProfileProvider>
            <UserProvider>{children}</UserProvider>
          </ProfileProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
