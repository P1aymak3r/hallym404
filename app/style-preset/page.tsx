'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Badge } from '../../components/ui/badge'
import { Card, CardContent, CardFooter } from '../../components/ui/card'
import { ScrollArea } from '../../components/ui/scroll-area'
import ProductHeader from '../../components/ProductHeader'

interface Style {
  id: string
  imageUrl: string
  tags: string[]
  likes: number
  description: string
}

const sampleStyles: Style[] = [
  {
    id: '1',
    imageUrl: '/images/s4.jpg',
    tags: ['캐주얼', '데일리', '미니멀'],
    likes: 120,
    description: '데일리 캐주얼 룩'
  },
  {
    id: '2',
    imageUrl: '/images/n1.jpg',
    tags: ['오피스', '미니멀', '모던'],
    likes: 85,
    description: '오피스 미니멀 룩'
  },
  {
    id: '3',
    imageUrl: '/images/s3.png?height=400&width=300',
    tags: ['스트릿', '캐주얼', '트렌디'],
    likes: 200,
    description: '스트릿 캐주얼 룩'
  },
  {
    id: '4',
    imageUrl: '/images/s5.jpg?height=400&width=300',
    tags: ['데이트', '로맨틱', '페미닌'],
    likes: 150,
    description: '로맨틱 데이트 룩'
  },
  {
    id: '5',
    imageUrl: '/images/s7.jpg?height=400&width=300',
    tags: ['스포티', '액티브', '캐주얼'],
    likes: 95,
    description: '스포티 액티브 룩'
  },
  {
    id: '6',
    imageUrl: '/images/s6.jpg?height=400&width=300',
    tags: ['빈티지', '유니크', '캐주얼'],
    likes: 180,
    description: '빈티지 캐주얼 룩'
  },
  {
    id: '7',
    imageUrl: '/images/s8.png',
    tags: ['미니멀', '모던'],
    likes: 220,
    description: '미니멀 모던 룩'
  },
  {
    id: '8',
    imageUrl: '/images/s11.jpg?height=400&width=300',
    tags: ['비즈니스', '포멀', '오피스'],
    likes: 110,
    description: '비즈니스 포멀 룩'
  },
  {
    id: '9',
    imageUrl: '/images/s17.jpg?height=400&width=300',
    tags: ['레더', '라이더', '자유로움'],
    likes: 130,
    description: '레더 라이더 룩'
  },
  {
    id: '10',
    imageUrl: '/images/s23.jpg?height=400&width=300',
    tags: ['레이어드', '모던', '빈티지'],
    likes: 175,
    description: '레이어드 빈티지 룩'
  },
  {
    id: '11',
    imageUrl: '/placeholder.svg?height=400&width=300',
    tags: ['미니멀', '모노크롬', '심플'],
    likes: 90,
    description: '미니멀 모노크롬 룩'
  },
  {
    id: '12',
    imageUrl: '/placeholder.svg?height=400&width=300',
    tags: ['프레피', '아카데믹', '클래식'],
    likes: 105,
    description: '프레피 아카데믹 룩'
  },
  // Add more sample styles as needed
]

const allTags = Array.from(new Set(sampleStyles.flatMap(style => style.tags)))

function TagFilter({ availableTags, selectedTags, onTagSelect }: { availableTags: string[], selectedTags: string[], onTagSelect: (tag: string) => void }) {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex space-x-2">
        {availableTags.map((tag) => (
          <Badge
            key={tag}
            variant={selectedTags.includes(tag) ? "default" : "outline"}
            className="cursor-pointer hover:bg-primary/90"
            onClick={() => onTagSelect(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </ScrollArea>
  )
}

function StyleCard({ style, index }: { style: Style, index: number }) {
  const href = index === 1 ? '/style-preset/styles' : `/styles/${style.id}`

  return (
    <Link href={href}>
      <Card className="overflow-hidden cursor-pointer">
        <CardContent className="p-0">
          <div className="relative aspect-[3/4]">
            <Image
              src={style.imageUrl}
              alt={style.description}
              fill
              className="object-cover p-2"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-1 p-2">
          <div className="flex flex-wrap gap-1">
            {style.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs px-1.5 py-0">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="text-xs text-muted-foreground truncate">{style.description}</p>
            <Button variant="ghost" size="icon" className="h-6 w-6 ml-auto">
              <Heart className="h-3 w-3" />
              <span className="sr-only">Like</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default function StylePresetPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [visibleStyles, setVisibleStyles] = useState(10)

  const handleTagSelect = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const filteredStyles = sampleStyles
    .filter(style => {
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.every(tag => style.tags.includes(tag))
      const matchesSearch = searchQuery === '' ||
        style.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        style.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesTags && matchesSearch
    })

  const handleLoadMore = () => {
    setVisibleStyles(prev => Math.min(prev + 10, filteredStyles.length))
  }

  return (
    <div className="min-h-screen">
      <ProductHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-6">
          <input
            type="search"
            placeholder="스타일 검색..."
            className="w-full max-w-xs px-4 py-2 border rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <TagFilter
            availableTags={allTags}
            selectedTags={selectedTags}
            onTagSelect={handleTagSelect}
          />
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredStyles.slice(0, visibleStyles).map((style, index) => (
            <StyleCard key={style.id} style={style} index={index} />
          ))}
        </div>

        {visibleStyles < filteredStyles.length && (
          <div className="mt-8 text-center">
            <Button onClick={handleLoadMore}>더보기</Button>
          </div>
        )}
      </main>
    </div>
  )
}

