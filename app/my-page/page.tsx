'use client'

import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, User, ShoppingBag, Heart, CreditCard, MessageSquare, Settings, LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { AuthContext } from '../context/AuthContext'
import { useRouter } from 'next/navigation'
import { ProfileContext } from '../context/ProfileContext'

export default function MyPage() {
  const { isLoggedIn, logout } = useContext(AuthContext)
  const { profile } = useContext(ProfileContext)!
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
            로그아웃
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
              <h2 className="text-xl font-semibold">{profile.name}</h2>
              <p className="text-gray-600">{profile.email}</p>
            </div>
          </div>
          <Link href="/my-profile" className="mt-4 inline-block text-blue-600 hover:underline">
            프로필 보기 및 수정
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/my-orders" className="bg-white shadow rounded-lg p-6 flex items-center hover:shadow-md transition-shadow">
            <ShoppingBag className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">내 주문</h3>
              <p className="text-gray-600">주문을 보고 추적하세요</p>
            </div>
          </Link>

          <Link href="/wishlist" className="bg-white shadow rounded-lg p-6 flex items-center hover:shadow-md transition-shadow">
            <Heart className="h-8 w-8 text-red-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">위시리스트</h3>
              <p className="text-gray-600">저장한 상품을 확인하세요</p>
            </div>
          </Link>

          <Link href="/payment-methods" className="bg-white shadow rounded-lg p-6 flex items-center hover:shadow-md transition-shadow">
            <CreditCard className="h-8 w-8 text-green-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">결제 방법</h3>
              <p className="text-gray-600">결제 옵션을 관리하세요</p>
            </div>
          </Link>

          <Link href="https://sundance.vercel.app/" className="bg-white shadow rounded-lg p-6 flex items-center hover:shadow-md transition-shadow">
            <MessageSquare className="h-8 w-8 text-purple-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Sundance</h3>
              <p className="text-gray-600">스타일 어시스턴트와 채팅하세요</p>
            </div>
          </Link>

          <Link href="/style-preset" className="bg-white shadow rounded-lg p-6 flex items-center hover:shadow-md transition-shadow">
            <User className="h-8 w-8 text-orange-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">스타일 프리셋</h3>
              <p className="text-gray-600">스타일 선호도를 맞춤 설정하세요</p>
            </div>
          </Link>

          <Link href="/account-settings" className="bg-white shadow rounded-lg p-6 flex items-center hover:shadow-md transition-shadow">
            <Settings className="h-8 w-8 text-gray-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">계정 설정</h3>
              <p className="text-gray-600">계정 선호도를 업데이트하세요</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
