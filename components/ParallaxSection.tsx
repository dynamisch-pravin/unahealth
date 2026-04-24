'use client'

import { useRef, useEffect } from 'react'

type Pattern = 'dots' | 'grid' | 'circuit' | 'diagonal' | 'hexagon' | 'rings'

const patternStyles: Record<Pattern, React.CSSProperties> = {
  dots: {
    backgroundImage: 'radial-gradient(circle, currentColor 1.5px, transparent 1.5px)',
    backgroundSize: '28px 28px',
  },
  grid: {
    backgroundImage:
      'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
    backgroundSize: '48px 48px',
  },
  diagonal: {
    backgroundImage:
      'repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)',
    backgroundSize: '22px 22px',
  },
  circuit: {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='currentColor' stroke-width='1'%3E%3Cpath d='M0 30h15M45 30h15M30 0v15M30 45v15'/%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='0' cy='30' r='2'/%3E%3Ccircle cx='60' cy='30' r='2'/%3E%3Ccircle cx='30' cy='0' r='2'/%3E%3Ccircle cx='30' cy='60' r='2'/%3E%3Cpath d='M15 30h5v-10h10M45 30h-5v10h-10'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundSize: '60px 60px',
  },
  hexagon: {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='56' height='100' viewBox='0 0 56 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 66L0 50V18L28 2l28 16v32L28 66zM28 98L0 82V50l28-16 28 16v32L28 98z' fill='none' stroke='currentColor' stroke-width='1'/%3E%3C/svg%3E")`,
    backgroundSize: '56px 100px',
  },
  rings: {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='30' fill='none' stroke='currentColor' stroke-width='1'/%3E%3Ccircle cx='40' cy='40' r='18' fill='none' stroke='currentColor' stroke-width='0.8'/%3E%3Ccircle cx='40' cy='40' r='6' fill='none' stroke='currentColor' stroke-width='0.8'/%3E%3C/svg%3E")`,
    backgroundSize: '80px 80px',
  },
}

interface ParallaxSectionProps {
  children: React.ReactNode
  pattern?: Pattern
  patternColor?: string
  patternOpacity?: number
  speed?: number                // 0 = no parallax, 0.3 = 30% speed vs scroll
  className?: string
  style?: React.CSSProperties
}

export default function ParallaxSection({
  children,
  pattern = 'dots',
  patternColor = '#ffffff',
  patternOpacity = 0.08,
  speed = 0.25,
  className = '',
  style = {},
}: ParallaxSectionProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const bgRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (speed === 0 || !bgRef.current || !wrapRef.current) return

    const onScroll = () => {
      if (!wrapRef.current || !bgRef.current) return
      const rect = wrapRef.current.getBoundingClientRect()
      const offset = rect.top * speed
      bgRef.current.style.transform = `translateY(${offset}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])

  return (
    <div ref={wrapRef} className={`relative overflow-hidden ${className}`} style={style}>
      {/* Parallax pattern layer */}
      <div
        ref={bgRef}
        className="absolute pointer-events-none will-change-transform"
        style={{
          inset: '-30% 0',
          color: patternColor,
          opacity: patternOpacity,
          ...patternStyles[pattern],
        }}
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
