'use client'

import React, { useState, useContext, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AuthContext } from '../app/context/AuthContext'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface LoginPopupProps {
  onClose: () => void
}

const LoginPopup = ({ onClose }: LoginPopupProps) => {
  const { login } = useContext(AuthContext)
  const router = useRouter()
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // 포털을 통한 모달 렌더링을 위해 DOM 요소 준비
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const success = login(id, password)
    if (success) {
      alert('로그인 성공!')
      onClose()
      router.refresh() // 로그인 상태 변경을 반영
    } else {
      setError('아이디 또는 비밀번호가 올바르지 않습니다.')
    }
  }

  if (!mounted) return null

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4">로그인</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="id" className="block text-sm font-medium text-gray-700">ID</label>
            <Input
              type="text"
              id="id"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
              className="w-full mt-1"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-1"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button type="submit" className="w-full">
            로그인
          </Button>
        </form>
      </div>
    </div>,
    document.body
  )
}

export default LoginPopup