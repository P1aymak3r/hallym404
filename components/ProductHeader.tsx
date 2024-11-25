'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Search, User, ShoppingBag } from 'lucide-react'
import { useState } from 'react'

export default function ProductHeader() {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vjcDW5vf3c9EQMjUPFPNh6FyxMi5Qz.png" 
            alt="WearShare Logo" 
            width={120} 
            height={40}
            className="h-8 w-auto"
          />
        </Link>
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
          <Button variant="ghost" size="icon">
            <User className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  )
}

