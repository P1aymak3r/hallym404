'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "../../components/ui/select"

export default function MyProfile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    height: '',
    weight: '',
    bodyType: '',
  })

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
    setIsLoggedIn(loggedIn)
    if (!loggedIn) {
      window.location.href = '/'
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setProfile(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Profile updated:', profile)
    alert('Profile updated successfully!')
  }

  if (!isLoggedIn) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex items-center">
          <Link href="/my-page" className="text-gray-600 hover:text-gray-900 mr-4">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-2xl font-bold">My Profile</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-6 max-w-2xl mx-auto">
          <div className="flex items-center mb-6">
            <div className="bg-gray-200 rounded-full p-3">
              <User className="h-12 w-12 text-gray-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-semibold">{profile.name}</h2>
              <p className="text-gray-600">{profile.email}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input
                type="text"
                id="name"
                name="name"
                value={profile.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input
                type="email"
                id="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-700">Height (cm)</label>
              <Input
                type="number"
                id="height"
                name="height"
                value={profile.height}
                onChange={handleChange}
                placeholder="Enter your height in cm"
              />
            </div>

            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight (kg)</label>
              <Input
                type="number"
                id="weight"
                name="weight"
                value={profile.weight}
                onChange={handleChange}
                placeholder="Enter your weight in kg"
              />
            </div>

            <div>
              <label htmlFor="bodyType" className="block text-sm font-medium text-gray-700">Body Type</label>
              <Select
                id="bodyType"
                name="bodyType"
                value={profile.bodyType}
                onChange={handleChange}
              >
                <option value="">체형 선택
                </option>
                <option value="ectomorph">슬림</option>
                <option value="mesomorph">표준</option>
                <option value="endomorph">오버핏</option>
              </Select>
            </div>

            <Button type="submit" className="w-full">
              Update Profile
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}