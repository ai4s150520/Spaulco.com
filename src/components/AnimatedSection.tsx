// src/components/AnimatedSection.tsx
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: React.ReactNode
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out'
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  triggerOnce?: boolean
}

export default function AnimatedSection({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  className,
  triggerOnce = true,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce && hasAnimated.current) {
            observer.unobserve(entry.target)
          }
          hasAnimated.current = true
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, triggerOnce])

  const animationClasses = {
    'fade-up': 'opacity-0 translate-y-12',
    'fade-down': 'opacity-0 -translate-y-12',
    'fade-left': 'opacity-0 translate-x-12',
    'fade-right': 'opacity-0 -translate-x-12',
    'zoom-in': 'opacity-0 scale-90',
    'zoom-out': 'opacity-0 scale-110',
  }

  const visibleClasses = {
    'fade-up': 'opacity-100 translate-y-0',
    'fade-down': 'opacity-100 translate-y-0',
    'fade-left': 'opacity-100 translate-x-0',
    'fade-right': 'opacity-100 translate-x-0',
    'zoom-in': 'opacity-100 scale-100',
    'zoom-out': 'opacity-100 scale-100',
  }

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all',
        isVisible ? visibleClasses[animation] : animationClasses[animation],
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionProperty: 'opacity, transform',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  )
}