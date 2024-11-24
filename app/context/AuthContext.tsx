'use client'

import React, { createContext, useState, useEffect, ReactNode } from 'react'

interface AuthContextType {
  isLoggedIn: boolean
  login: (id: string, password: string) => boolean
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => false,
  logout: () => {},
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
    setIsLoggedIn(loggedIn)
  }, [])

  const login = (id: string, password: string) => {
    const VALID_ID = 'wearshare@hallym.ac'
    const VALID_PASSWORD = '404hallym'

    if (id === VALID_ID && password === VALID_PASSWORD) {
      localStorage.setItem('isLoggedIn', 'true')
      setIsLoggedIn(true)
      return true
    }
    return false
  }

  const logout = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
} 