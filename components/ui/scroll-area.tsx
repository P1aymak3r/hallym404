'use client'

import React, { useRef, useEffect, useState } from 'react'

interface ScrollAreaProps {
  children: React.ReactNode
  className?: string
  orientation?: 'vertical' | 'horizontal'
}

export function ScrollArea({ children, className = '', orientation = 'vertical' }: ScrollAreaProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showScrollbar, setShowScrollbar] = useState(false)
  const [scrollbarPosition, setScrollbarPosition] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startY, setStartY] = useState(0)
  const [startScrollTop, setStartScrollTop] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current) {
        const { scrollHeight, clientHeight, scrollWidth, clientWidth } = scrollRef.current
        setShowScrollbar(
          orientation === 'vertical' 
            ? scrollHeight > clientHeight 
            : scrollWidth > clientWidth
        )
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [orientation])

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      const newPosition = orientation === 'vertical'
        ? (scrollTop / (scrollHeight - clientHeight)) * 100
        : (scrollLeft / (scrollWidth - clientWidth)) * 100
      setScrollbarPosition(newPosition)
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartY(orientation === 'vertical' ? e.clientY : e.clientX)
    setStartScrollTop(orientation === 'vertical' ? scrollRef.current!.scrollTop : scrollRef.current!.scrollLeft)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    const { scrollHeight, clientHeight, scrollWidth, clientWidth } = scrollRef.current!
    const delta = (orientation === 'vertical' ? e.clientY : e.clientX) - startY
    const maxScroll = orientation === 'vertical' ? scrollHeight - clientHeight : scrollWidth - clientWidth
    const newScrollPosition = Math.max(0, Math.min(startScrollTop + delta * (maxScroll / clientHeight), maxScroll))
    
    if (orientation === 'vertical') {
      scrollRef.current!.scrollTop = newScrollPosition
    } else {
      scrollRef.current!.scrollLeft = newScrollPosition
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    } else {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        ref={scrollRef}
        className={`overflow-${orientation === 'vertical' ? 'y' : 'x'}-scroll scrollbar-hide h-full w-full`}
        onScroll={handleScroll}
      >
        {children}
      </div>
      {showScrollbar && (
        <div 
          className={`absolute ${orientation === 'vertical' ? 'right-0 top-0 w-2 h-full' : 'bottom-0 left-0 h-2 w-full'} bg-gray-200 rounded`}
        >
          <div
            className={`bg-gray-400 rounded ${orientation === 'vertical' ? 'w-full' : 'h-full'}`}
            style={{
              [orientation === 'vertical' ? 'height' : 'width']: '20%',
              [orientation === 'vertical' ? 'top' : 'left']: `${scrollbarPosition}%`,
              position: 'absolute',
              transition: 'top 0.1s, left 0.1s'
            }}
            onMouseDown={handleMouseDown}
          />
        </div>
      )}
    </div>
  )
}

