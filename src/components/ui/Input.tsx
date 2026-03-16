import { useState } from 'react'
import type { InputHTMLAttributes, ReactNode } from 'react'
import { Eye, EyeOff } from 'lucide-react'

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  labelClassName?: string
  type?: 'text' | 'email' | 'password' | 'tel'
  icon?: ReactNode
  error?: string
}

export function Input({
  label,
  labelClassName = 'text-gray-700',
  type = 'text',
  icon,
  error,
  className = '',
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'
  const resolvedType = isPassword ? (showPassword ? 'text' : 'password') : type

  return (
    <div className="space-y-1.5">
      {label && (
        <label className={`block text-sm font-medium ${labelClassName}`}>{label}</label>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            {icon}
          </span>
        )}
        <input
          type={resolvedType}
          className={`w-full bg-white/50 backdrop-blur-sm border rounded-xl py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition-all
            focus:border-forest-400 focus:ring-2 focus:ring-forest-400/20
            ${error ? 'border-red-400' : 'border-white/60'}
            ${icon ? 'pl-10' : 'pl-4'}
            ${isPassword ? 'pr-10' : 'pr-4'}
            ${className}`}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}
