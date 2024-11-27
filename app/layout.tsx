'use client'

import './globals.css'
import { AuthProvider } from './context/AuthContext'
import { ProfileProvider } from './context/ProfileContext'
import React from 'react'
import { UserProvider } from './context/UserContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
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
  )
}
