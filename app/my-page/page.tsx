'use client'

import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, User, ShoppingBag, Heart, CreditCard, MessageSquare, Settings, LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { AuthContext } from '../context/AuthContext'
import { useRouter } from 'next/navigation'

export default function MyPage() {
  const { isLoggedIn, logout } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/')
    }
  }, [isLoggedIn, router])

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  if (!isLoggedIn) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-gray-600 hover:text-gray-900 mr-4">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-2xl font-bold">My Page</h1>
          </div>
          <Button onClick={handleLogout} variant="ghost" className="text-red-600 hover:text-red-800">
            <LogOut className="h-5 w-5 mr-2" />
            Log Out
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex items-center">
            <div className="bg-gray-200 rounded-full p-3">
              <User className="h-8 w-8 text-gray-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-gray-600">john.doe@example.com</p>
            </div>
          </div>
          <Link href="/my-profile" className="mt-4 inline-block text-blue-600 hover:underline">
            View and Edit Profile
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/my-orders" className="bg-white shadow rounded-lg p-6 flex items-center hover:shadow-md transition-shadow">
            <ShoppingBag className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">My Orders</h3>
              <p className="text-gray-600">View and track your orders</p>
            </div>
          </Link>

          <Link href="/wishlist" className="bg-white shadow rounded-lg p-6 flex items-center hover:shadow-md transition-shadow">
            <Heart className="h-8 w-8 text-red-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Wishlist</h3>
              <p className="text-gray-600">View your saved items</p>
            </div>
          </Link>

          <Link href="/payment-methods" className="bg-white shadow rounded-lg p-6 flex items-center hover:shadow-md transition-shadow">
            <CreditCard className="h-8 w-8 text-green-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Payment Methods</h3>
              <p className="text-gray-600">Manage your payment options</p>
            </div>
          </Link>

          <Link href="/sundance" className="bg-white shadow rounded-lg p-6 flex items-center hover:shadow-md transition-shadow">
            <MessageSquare className="h-8 w-8 text-purple-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Sundance</h3>
              <p className="text-gray-600">Chat with our style assistant</p>
            </div>
          </Link>

          <Link href="/style-preset" className="bg-white shadow rounded-lg p-6 flex items-center hover:shadow-md transition-shadow">
            <User className="h-8 w-8 text-orange-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Style Preset</h3>
              <p className="text-gray-600">Customize your style preferences</p>
            </div>
          </Link>

          <Link href="/account-settings" className="bg-white shadow rounded-lg p-6 flex items-center hover:shadow-md transition-shadow">
            <Settings className="h-8 w-8 text-gray-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Account Settings</h3>
              <p className="text-gray-600">Update your account preferences</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}