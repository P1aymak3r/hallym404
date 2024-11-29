'use client'

import { useState } from 'react'
import Image from 'next/image'
import ProductHeader from '@/components/ProductHeader'
import Link from 'next/link'

// 더미 데이터
const product = {
  name: "헤어리 오버핏 테일러드 자켓",
  price: 129000,
  colors: ["Light Gray", "Cream"],
  sizes: ["S(90)", "M(95)", "L(100)"],
  images: [
    "/images/n1.jpg",
    "/images/j1.jpg",
    "/images/j2.jpg",
    "/images/j3.jpg",
  ],
  tags: ["#오버핏", "#테일러드", "#오피스", "#봄", "#가을"],
  officialStyling: [
    { image: "/images/s1.jpg", description: "오피스 룩" },
  ],
}

export default function ClassicDenimJacketPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };
  return (
    <>
      <ProductHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* 이미지 갤러리 */}
          <div className="w-full md:w-1/2">
            <div className="mb-4">
              <Image 
                src={product.images[selectedImage]} 
                alt={product.name} 
                width={400} 
                height={600} 
                className="w-full h-auto"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button 
                  key={index} 
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 ${selectedImage === index ? 'border-2 border-black' : ''}`}
                >
                  <Image 
                    src={image} 
                    alt={`${product.name} ${index + 1}`} 
                    width={80} 
                    height={120} 
                    className="w-20 h-auto object-cover"
                  />
                </button>
              ))}
            </div>
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
                  <Link href="/style-preset/styles">
                    <Image 
                      src={style.image}
                      alt={`스타일링 ${index + 1}`} 
                      width={200} 
                      height={300} 
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                </div>
                <p className="mt-2 text-center text-sm font-medium">{style.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

