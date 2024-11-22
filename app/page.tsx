'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, Search, ShoppingBag, User } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import LoginPopup from '../components/login-popup'

export default function Home() {
  const [showLoginPopup, setShowLoginPopup] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
    setIsLoggedIn(loggedIn)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
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
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/women" className="text-sm font-medium">Women</Link>
            <Link href="/men" className="text-sm font-medium">Men</Link>
            <Link href="/kids" className="text-sm font-medium">Kids</Link>
            <Link href="/baby" className="text-sm font-medium">Baby</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <form className="hidden md:block">
              <Input
                type="search"
                placeholder="Search"
                className="w-[200px]"
              />
            </form>
            <Button variant="ghost" size="icon">
              <Search className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => isLoggedIn ? window.location.href = '/my-page' : setShowLoginPopup(true)}
            >
              <User className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/videos/MainPage.mp4" type="video/mp4"/>
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-lg">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  EveryWhere EveryWear
                </h1>
                <p className="text-xl text-white mb-8">
                  Discover Your Style
                </p>
                <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Featured Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Women', 'Men', 'Kids', 'Accessories'].map((category) => (
                <div key={category} className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=256&width=256"
                    alt={category}
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{category}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured In Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-lg font-medium text-gray-600 mb-12">FEATURED IN</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-arhc1o2ZSPQ0HDvBfGoZSqmq5Dj96s.png"
                alt="ELLE Australia"
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0dRjOde5zZRH2i6xVWLkkAT3M8GmE8.png"
                alt="BAZAAR"
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RxwHkF78SM95MZV3ixrER8MGzfmRKE.png" /* 1, 3번 이미지 수정하기 */
                alt="marie claire"
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gcpdG4WdWuWNFcEZLFoZu0aLnUyMvW.png"
                alt="VOGUE"
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ViYzSM51AOfX6Ej5D1a17VjeJI6AuW.png"
                alt="RUSSH"
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">New Arrivals</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="group">
                  <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=256&width=256"
                      alt={`Product ${item}`}
                      width={256}
                      height={256}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="font-semibold mb-2">Product Name</h3>
                  <p className="text-gray-600">$XX.XX</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Help</h3>
              <ul className="space-y-2">
                <li><Link href="/faq" className="hover:text-gray-300">FAQ</Link></li>
                <li><Link href="/returns" className="hover:text-gray-300">Returns</Link></li>
                <li><Link href="/contact" className="hover:text-gray-300">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">About</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-gray-300">Careers</Link></li>
                <li><Link href="/sustainability" className="hover:text-gray-300">Sustainability</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Social</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-gray-300">Facebook</Link></li>
                <li><Link href="#" className="hover:text-gray-300">Instagram</Link></li>
                <li><Link href="#" className="hover:text-gray-300">Twitter</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/terms" className="hover:text-gray-300">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center text-sm text-gray-400">
            © 2023 WearShare. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Login Popup */}
      {showLoginPopup && <LoginPopup onClose={() => setShowLoginPopup(false)} />}
    </div>
  )
}