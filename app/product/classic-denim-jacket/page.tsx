'use client'

import { useState } from 'react'
import Image from 'next/image'
import ProductHeader from '@/components/ProductHeader'

// 더미 데이터
const product = {
  name: "클래식 데님 자켓",
  price: 89000,
  colors: ["블루", "블랙", "라이트 블루"],
  sizes: ["XS", "S", "M", "L", "XL"],
  images: [
    "/images/n1.jpg",
    "/placeholder.svg?height=600&width=400",
    "/placeholder.svg?height=600&width=400",
  ],
  tags: ["#아우터", "#데님", "#캐주얼", "#클래식", "#사계절"],
  officialStyling: [
    { image: "/placeholder.svg?height=300&width=200", description: "캐주얼 룩" },
    { image: "/placeholder.svg?height=300&width=200", description: "스트릿 룩" },
    { image: "/placeholder.svg?height=300&width=200", description: "데이트 룩" },
    { image: "/placeholder.svg?height=300&width=200", description: "출근 룩" },
  ],
  styleHints: [
    { image: "/placeholder.svg?height=300&width=200", likes: 1234 },
    { image: "/placeholder.svg?height=300&width=200", likes: 5678 },
    { image: "/placeholder.svg?height=300&width=200", likes: 9012 },
    { image: "/placeholder.svg?height=300&width=200", likes: 3456 },
  ]
}

// 이미지 슬라이더를 위한 커스텀 훅
function useImageSlider(images: string[]) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return { currentImage: images[currentIndex], nextImage, prevImage }
}

export default function ClassicDenimJacketPage() {
  const { currentImage, nextImage, prevImage } = useImageSlider(product.images)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])

  return (
    <>
      <ProductHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* 이미지 슬라이더 */}
          <div className="relative w-full md:w-1/2">
            <Image 
              src={currentImage} 
              alt={product.name} 
              width={400} 
              height={600} 
              className="w-full h-auto"
            />
            <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
              &#10094;
            </button>
            <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
              &#10095;
            </button>
          </div>

          {/* 제품 정보 및 구매 옵션 */}
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl mb-4">￦{product.price.toLocaleString()}</p>

            {/* 색상 선택 */}
            <div className="mb-4">
              <h2 className="font-semibold mb-2">색상</h2>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border ${selectedColor === color ? 'border-black' : 'border-gray-300'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* 사이즈 선택 */}
            <div className="mb-4">
              <h2 className="font-semibold mb-2">사이즈</h2>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border ${selectedSize === size ? 'border-black' : 'border-gray-300'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* 태그 */}
            <div className="mb-4">
              <h2 className="font-semibold mb-2">태그</h2>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-200 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 장바구니 담기 버튼 */}
            <button className="w-full bg-black text-white py-3 mt-4 hover:bg-gray-800">
              장바구니 담기
            </button>
          </div>
        </div>

        {/* 공식 스타일링 */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">공식 스타일링</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.officialStyling.map((style, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden">
                  <Image 
                    src={style.image} 
                    alt={`스타일링 ${index + 1}`} 
                    width={200} 
                    height={300} 
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-center text-sm font-medium">{style.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* StyleHint */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">StyleHint</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.styleHints.map((hint, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden">
                  <Image 
                    src={hint.image} 
                    alt={`StyleHint ${index + 1}`} 
                    width={200} 
                    height={300} 
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded-full text-sm">
                    ❤️ {hint.likes}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

