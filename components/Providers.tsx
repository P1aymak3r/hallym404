'use client'

import React from 'react'
import { AuthProvider } from '../app/context/AuthContext'

interface ProvidersProps {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default Providers
