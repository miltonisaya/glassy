import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'

type Variant = 'primary' | 'secondary' | 'white'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  withArrow?: boolean
  children: ReactNode
}

const variantStyles: Record<Variant, string> = {
  primary: 'bg-forest-500 text-white hover:bg-forest-600',
  secondary: 'bg-white/15 text-white border border-white/25 hover:bg-white/25',
  white: 'bg-white text-gray-900 hover:bg-gray-50',
}

export function Button({
  variant = 'primary',
  withArrow = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-full font-medium text-sm transition-all duration-200 cursor-pointer ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {withArrow && (
        <span className="flex items-center justify-center w-7 h-7 bg-gray-900/70 rounded-full shrink-0">
          <ArrowUpRight size={14} className="text-white" />
        </span>
      )}
    </button>
  )
}
