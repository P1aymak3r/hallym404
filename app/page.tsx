'use client'

import { useContext, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, Search, ShoppingBag, User, LogOut } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import LoginPopup from '../components/login-popup'
import FeaturedCategories from '../components/FeaturedCategories'
import { AuthContext } from '../app/context/AuthContext'
import { useRouter } from 'next/navigation'

export default function Home() {
  const { isLoggedIn, logout } = useContext(AuthContext)
  const [showLoginPopup, setShowLoginPopup] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/')
  }

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
          <nav className="hidden md:flex space-x-6">
            <Link href="/woman" className="text-sm font-medium">Woman</Link>
            <Link href="/man" className="text-sm font-medium">Man</Link>
            <Link href="/kid" className="text-sm font-medium">Kid</Link>
            <Link href="/accessories" className="text-sm font-medium">Accessories</Link>
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
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen">
          <iframe
            src="https://drive.google.com/file/d/1tWHoiwWoT0zGp7rQ2twPAJ0EyQ1g_R-T/view"
            width="100%"
            height="100%"
            allow="autoplay"
          ></iframe>
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
        {/* Featured Categories 섹션 */}
        <FeaturedCategories />

 {/* Featured In Section */}
 <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-lg font-medium text-gray-600 mb-12">FEATURED IN</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
              <Image
                src="/images/l1.png"
                alt="Supreme"
                width={480}
                height={160}
                className="h-16 w-auto object-contain"
              />
              <Image
                src="/images/l2.png"
                alt="MLB"
                width={480} 
                height={160}
                className="h-28 w-auto object-contain"
              />
              <Image
                src="/images/l3.png"
                alt="wtfisthis"
                width={480} 
                height={160}
                className="h-16 w-auto object-contain"
              />
              <Image
                src="/images/l4.png"
                alt="H&M"
                width={480}   
                height={160}
                className="h-16 w-auto object-contain"
              />
              <Image
                src="/images/l5.png"
                alt="ZARA"
                width={480} 
                height={160}
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">New Arrivals</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { id: 1, name: '클래식 데님 자켓', price: '89,000', image: '/images/n1.jpg' },
              { id: 2, name: '캐시미어 스웨터', price: '129,000', image: '/images/n2.jpg' },
              { id: 3, name: '가죽 크로스백', price: '159,000', image: '/images/n3.jpg' },
              { id: 4, name: '린넨 셔츠', price: '69,000', image: '/images/n4.jpg' },
              { id: 5, name: '슬림핏 진', price: '79,000', image: '/images/n5.jpg' },
              { id: 6, name: '니트 카디건', price: '99,000', image: '/images/n6.jpg' },
              { id: 7, name: '플리츠 스커트', price: '85,000', image: '/images/n7.jpg' },
              { id: 8, name: '오버사이즈 코트', price: '199,000', image: '/images/n8.jpg' }
            ].map((product, index) => (
              <div key={product.id} className="group">
                {index === 0 ? (
                  <Link href="/product/classic-denim-jacket">
                    <div className="relative h-[400px] mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600">₩{product.price}</p>
                  </Link>
                ) : (
                  <>
                    <div className="relative h-[400px] mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600">₩{product.price}</p>
                  </>
                )}
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
