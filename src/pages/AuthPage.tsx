import { useState } from 'react'
import { Mail, Lock, User, ArrowLeft, MapPin } from 'lucide-react'
import { Input } from '../components/ui'

type AuthMode = 'login' | 'register'
type AccountType = 'traveler' | 'operator'

interface AuthPageProps {
  onNavigate: (page: string) => void
}

// ─── Login Form ──────────────────────────────────────────────────────────────

interface LoginFormProps {
  onSuccess: () => void
  onSwitch: () => void
}

function LoginForm({ onSuccess, onSwitch }: LoginFormProps) {
  return (
    <div className="space-y-4">
      <Input
        label="Email address"
        labelClassName="text-white/80"
        type="email"
        placeholder="you@tembea.com"
        icon={<Mail size={15} />}
      />
      <Input
        label="Password"
        labelClassName="text-white/80"
        type="password"
        placeholder="••••••••"
        icon={<Lock size={15} />}
      />

      <div className="flex justify-end">
        <button
          type="button"
          className="text-xs text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
        >
          Forgot password?
        </button>
      </div>

      <button
        type="button"
        onClick={onSuccess}
        className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer"
      >
        Sign In
      </button>

      <p className="text-center text-sm text-white/60">
        Don't have an account?{' '}
        <button
          type="button"
          onClick={onSwitch}
          className="text-amber-400 hover:text-amber-300 font-medium transition-colors cursor-pointer"
        >
          Create one
        </button>
      </p>
    </div>
  )
}

// ─── Register Form ───────────────────────────────────────────────────────────

interface RegisterFormProps {
  onSuccess: () => void
  onSwitch: () => void
}

function RegisterForm({ onSuccess, onSwitch }: RegisterFormProps) {
  const [accountType, setAccountType] = useState<AccountType>('traveler')

  return (
    <div className="space-y-4">
      <Input
        label="Full name"
        labelClassName="text-white/80"
        type="text"
        placeholder="John Doe"
        icon={<User size={15} />}
      />
      <Input
        label="Email address"
        labelClassName="text-white/80"
        type="email"
        placeholder="you@tembea.com"
        icon={<Mail size={15} />}
      />
      <Input
        label="Password"
        labelClassName="text-white/80"
        type="password"
        placeholder="••••••••"
        icon={<Lock size={15} />}
      />
      <Input
        label="Confirm password"
        labelClassName="text-white/80"
        type="password"
        placeholder="••••••••"
        icon={<Lock size={15} />}
      />

      {/* Account type */}
      <div className="space-y-1.5">
        <p className="text-sm font-medium text-white/80">I am a</p>
        <div className="grid grid-cols-2 gap-3">
          {([
            { value: 'traveler', label: '🧳 Traveler', desc: 'Browse & book experiences' },
            { value: 'operator', label: '🏕️ Operator', desc: 'List & manage activities' },
          ] as const).map(({ value, label, desc }) => (
            <button
              key={value}
              type="button"
              onClick={() => setAccountType(value)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                accountType === value
                  ? 'bg-amber-500/25 border-amber-400/60 text-white'
                  : 'bg-white/10 border-white/20 text-white/60 hover:bg-white/15'
              }`}
            >
              <p className="text-sm font-medium">{label}</p>
              <p className="text-[11px] mt-0.5 opacity-70">{desc}</p>
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={onSuccess}
        className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer"
      >
        Create Account
      </button>

      <p className="text-center text-sm text-white/60">
        Already have an account?{' '}
        <button
          type="button"
          onClick={onSwitch}
          className="text-amber-400 hover:text-amber-300 font-medium transition-colors cursor-pointer"
        >
          Sign in
        </button>
      </p>
    </div>
  )
}

// ─── Auth Page ───────────────────────────────────────────────────────────────

export function AuthPage({ onNavigate }: AuthPageProps) {
  const [mode, setMode] = useState<AuthMode>('login')

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background — same blobs as landing page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-br from-amber-600/45 via-orange-500/30 to-teal-700/40" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-175 h-125 bg-amber-400/25 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Back to home */}
        <button
          onClick={() => onNavigate('landing')}
          className="flex items-center gap-2 text-white/70 hover:text-white text-sm mb-5 transition-colors cursor-pointer"
        >
          <ArrowLeft size={15} />
          Back to home
        </button>

        {/* Glass card */}
        <div className="bg-black/25 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">

          {/* Brand header */}
          <div className="px-8 pt-8 pb-6 text-center border-b border-white/15">
            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-20 bg-white rounded-2xl overflow-hidden shadow-lg">
                <img src="/logo.png" alt="Tembea" className="w-full h-full object-contain" />
              </div>
            </div>
            <h1 className="text-white font-semibold text-lg">
              {mode === 'login' ? 'Welcome back' : 'Join Tembea'}
            </h1>
            <p className="text-white/55 text-sm mt-1">
              {mode === 'login'
                ? 'Sign in to continue your journey'
                : 'Start exploring extraordinary experiences'}
            </p>
          </div>

          {/* Tab switcher */}
          <div className="px-8 pt-6">
            <div className="flex bg-white/10 rounded-xl p-1">
              {(['login', 'register'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                    mode === m
                      ? 'bg-white/20 text-white shadow-sm'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  {m === 'login' ? 'Sign In' : 'Register'}
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="px-8 py-6">
            {mode === 'login' ? (
              <LoginForm
                onSuccess={() => onNavigate('dashboard')}
                onSwitch={() => setMode('register')}
              />
            ) : (
              <RegisterForm
                onSuccess={() => onNavigate('dashboard')}
                onSwitch={() => setMode('login')}
              />
            )}
          </div>

          {/* Footer hint */}
          <div className="px-8 pb-6 flex items-center justify-center gap-2 text-white/30 text-xs">
            <MapPin size={11} />
            <span>Discover Tanzania & beyond</span>
          </div>
        </div>
      </div>
    </div>
  )
}
