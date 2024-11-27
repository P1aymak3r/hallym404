'use client'

import { Button } from "@/components/ui/button"
import { MessageCircle } from 'lucide-react'
import { useRouter } from "next/navigation"

export function ChatButton() {
  const router = useRouter()

  return (
    <Button
      onClick={() => router.push('https://sundance.vercel.app/')}
      className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-shadow"
      size="icon"
      aria-label="Open Chat"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  )
}

