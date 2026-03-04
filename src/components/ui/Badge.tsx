import type { ReactNode } from 'react'

interface BadgeProps {
  icon?: ReactNode
  children: ReactNode
  className?: string
}

export function Badge({ icon, children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full text-white/90 text-sm ${className}`}
    >
      {icon && <span className="text-orange-400">{icon}</span>}
      {children}
    </span>
  )
}
