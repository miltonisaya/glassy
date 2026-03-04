import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  /** 'light' for dashboard (light bg), 'dark' for landing (colored bg) */
  variant?: 'light' | 'dark'
}

const variants = {
  light: 'bg-white/40 border-white/60 shadow-lg',
  dark: 'bg-black/25 border-white/20 shadow-2xl',
}

export function GlassCard({ children, className = '', variant = 'light' }: GlassCardProps) {
  return (
    <div className={`backdrop-blur-xl border rounded-2xl ${variants[variant]} ${className}`}>
      {children}
    </div>
  )
}
