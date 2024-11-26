'use client'

import React from 'react'
import Image from 'next/image'

const categories = [
  { name: 'Woman', image: '/images/woman.jpg' },
  { name: 'Man', image: '/images/man.jpg' },
  { name: 'Kid', image: '/images/kid.jpg' },
  { name: 'Accessories', image: '/images/ring.jpg' }
]

const FeaturedCategories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={category.image}
                alt={category.name}
                width={256}
                height={256}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCategories
