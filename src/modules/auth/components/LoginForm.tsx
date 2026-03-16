import type { FormikProps } from 'formik'
import { Mail, Lock } from 'lucide-react'
import { Input } from '../../../components/ui'
import type { LoginPayload } from '../types'

interface LoginFormProps {
  formik: FormikProps<LoginPayload>
  onSwitch: () => void
}

export function LoginForm({ formik, onSwitch }: LoginFormProps) {
  return (
    <form onSubmit={formik.handleSubmit} noValidate className="space-y-4">
      <Input
        label="Email address"
        labelClassName="text-white/80"
        type="email"
        placeholder="you@tembea.com"
        icon={<Mail size={15} />}
        error={formik.touched.email ? formik.errors.email : undefined}
        {...formik.getFieldProps('email')}
      />
      <Input
        label="Password"
        labelClassName="text-white/80"
        type="password"
        placeholder="••••••••"
        icon={<Lock size={15} />}
        error={formik.touched.password ? formik.errors.password : undefined}
        {...formik.getFieldProps('password')}
      />

      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="w-full py-3 bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer"
      >
        {formik.isSubmitting ? 'Signing in…' : 'Sign In'}
      </button>

      <p className="text-center text-sm text-white/60">
        Don't have an account?{' '}
        <button
          type="button"
          onClick={onSwitch}
          className="text-amber-400 hover:text-amber-300 font-medium transition-colors cursor-pointer"
        >
          Register
        </button>
      </p>
    </form>
  )
}
