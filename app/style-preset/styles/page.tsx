import Image from "next/image"
import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ProductHeader from '../../../components/ProductHeader'

export default function StylePresetDetail() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProductHeader />
      <div className="grid gap-8 md:grid-cols-2">
        {/* Image Section */}
        <div className="relative aspect-[3/4] w-full">
          <Image
            src="/images/n1.jpg?height=800&width=600"
            alt="Grey blazer outfit style"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">오피스 미니멀 룩</h1>
            <Button variant="ghost" size="icon">
              <Heart className="w-6 h-6" />
            </Button>
          </div>

          {/* Style Tags */}
          <div className="flex flex-wrap gap-2">
            {["오피스", "미니멀", "포멀"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-secondary rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Related Items */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">스타일 아이템</h2>
            <div className="grid grid-cols-3 gap-4">
              {[
                "날개사 뷔스티에 블라우스",
                "날개사 미니 스커트",
                "헤어리 오버핏 테일러드 자켓",
              ].map((item, index) => (
                <Card key={item}>
                  <CardContent className="p-4">
                    <div className="aspect-square relative mb-2">
                      <Image
                        src={`/images/c${index + 1}.jpg`}
                        alt={item}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <p className="text-sm">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Style Description */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">스타일 설명</h2>
            <p className="text-muted-foreground">
             오버사이즈 그레이 블레이저와 미니멀한 원피스가 어우러져 세련된 오피스 무드를 연출합니다. 
              간결한 실루엣과 절제된 디자인이 고급스러운 분위기를 더하며, 깔끔하면서도 단정한 스타일링으로 미니멀한 매력을 완성했습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

