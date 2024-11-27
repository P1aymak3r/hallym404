'use client'

import { useContext, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, Search, ShoppingBag, User, LogOut } from 'lucide-react'

import { Button } from './ui/button'
import { Input } from './ui/input'
import LoginPopup from './login-popup'
import { AuthContext } from '../app/context/AuthContext'
import { useRouter } from 'next/navigation'

export default function ProductHeader() {
  const { isLoggedIn, logout } = useContext(AuthContext)
  const [showLoginPopup, setShowLoginPopup] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
          <Link href="/" className="flex items-center">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vjcDW5vf3c9EQMjUPFPNh6FyxMi5Qz.png" 
              alt="WearShare Logo" 
              width={120} 
              height={40}
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/woman" className="text-sm font-medium">Woman</Link>
          <Link href="/man" className="text-sm font-medium">Man</Link>
          <Link href="/kid" className="text-sm font-medium">Kid</Link>
          <Link href="/accessories" className="text-sm font-medium">Accessories</Link>
        </nav>
        <div className="flex items-center space-x-4">
          {showSearch ? (
            <form className="relative">
              <Input
                type="search"
                placeholder="Search"
                className="w-full md:w-[200px]"
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0"
                onClick={() => setShowSearch(false)}
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setShowSearch(true)}>
              <Search className="h-6 w-6" />
            </Button>
          )}
          {isLoggedIn ? (
            <>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => router.push('/my-page')}
              >
                <User className="h-6 w-6" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleLogout}
              >
                <LogOut className="h-6 w-6" />
              </Button>
            </>
          ) : (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setShowLoginPopup(true)}
            >
              <User className="h-6 w-6" />
            </Button>
          )}
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Login Popup */}
      {showLoginPopup && <LoginPopup onClose={() => setShowLoginPopup(false)} />}
    </header>
  )
}

