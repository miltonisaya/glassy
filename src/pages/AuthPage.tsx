import { useState } from 'react'
import { ArrowLeft, MapPin } from 'lucide-react'
import { LoginForm, RegisterForm, useLoginForm, useRegisterForm } from '../modules/auth'

type AuthMode = 'login' | 'register'

interface AuthPageProps {
  onNavigate: (page: string) => void
}

export function AuthPage({ onNavigate }: AuthPageProps) {
  const [mode, setMode] = useState<AuthMode>('login')

  const loginFormik = useLoginForm({ onSuccess: () => onNavigate('dashboard') })
  const registerFormik = useRegisterForm({ onSuccess: () => onNavigate('dashboard') })

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background — same blobs as landing page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-br from-forest-700/45 via-forest-500/30 to-forest-800/40" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-175 h-125 bg-forest-400/25 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-sand-400/20 rounded-full blur-3xl" />
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
              <LoginForm formik={loginFormik} onSwitch={() => setMode('register')} />
            ) : (
              <RegisterForm formik={registerFormik} onSwitch={() => setMode('login')} />
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
