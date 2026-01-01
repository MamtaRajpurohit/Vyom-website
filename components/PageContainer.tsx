'use client'

import { ReactNode } from 'react'

interface PageContainerProps {
  children: ReactNode
  index: number
  isActive: boolean
}

export default function PageContainer({ children, isActive }: PageContainerProps) {
  return (
    <div
      className="w-full h-full flex items-center justify-center px-2 sm:px-4 py-4 sm:py-6 lg:pl-28 lg:pr-20 lg:py-8"
      style={{
        opacity: isActive ? 1 : 0.4,
        pointerEvents: isActive ? 'auto' : 'none',
        transition: 'opacity 0.4s ease-out',
        contain: 'layout style',
      }}
    >
      <div className="relative w-full max-w-6xl h-[85vh] sm:h-[88vh] md:h-[90vh] mx-auto bg-black/40 border border-white/20 rounded-lg sm:rounded-xl overflow-hidden backdrop-blur-sm">
        <div className="relative w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  )
}

