'use client'

import React, { createContext, useState, useEffect, ReactNode } from 'react'

interface Profile {
  name: string
  email: string
  height: string
  weight: string
  bodyType: string
}

interface ProfileContextType {
  profile: Profile
  setProfile: React.Dispatch<React.SetStateAction<Profile>>
}

export const ProfileContext = createContext<ProfileContextType | undefined>(undefined)

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<Profile>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    height: '',
    weight: '',
    bodyType: '',
  })

  useEffect(() => {
    const storedProfile = localStorage.getItem('profile')
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('profile', JSON.stringify(profile))
  }, [profile])

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  )
} 
