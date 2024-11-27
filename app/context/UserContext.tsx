import React, { createContext, useState, ReactNode } from 'react'

interface UserProfile {
  name: string
  email: string
  height: string
  weight: string
  bodyType: string
}

interface UserContextType {
  profile: UserProfile | null
  setProfile: (profile: UserProfile) => void
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<UserProfile | null>(null)

  return (
    <UserContext.Provider value={{ profile, setProfile }}>
      {children}
    </UserContext.Provider>
  )
}
