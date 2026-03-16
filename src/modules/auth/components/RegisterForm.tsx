import type { FormikProps } from 'formik'
import { Mail, Lock, User } from 'lucide-react'
import { Input } from '../../../components/ui'
import { AccountTypeEnum } from '../types'
import type { RegisterPayload } from '../types'

interface RegisterFormProps {
  formik: FormikProps<RegisterPayload>
  onSwitch: () => void
}

const ACCOUNT_TYPES: { value: AccountTypeEnum; label: string; desc: string }[] = [
  { value: AccountTypeEnum.TRAVELLER, label: '🧳 Traveler', desc: 'Browse & book experiences' },
  { value: AccountTypeEnum.OPERATOR, label: '🏕️ Operator', desc: 'List & manage activities' },
]

export function RegisterForm({ formik, onSwitch }: RegisterFormProps) {
  return (
    <form onSubmit={formik.handleSubmit} noValidate className="space-y-4">
      <Input
        label="Full name"
        labelClassName="text-white/80"
        type="text"
        placeholder="Your full name"
        icon={<User size={15} />}
        error={formik.touched.fullName ? formik.errors.fullName : undefined}
        {...formik.getFieldProps('fullName')}
      />
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
      <Input
        label="Confirm password"
        labelClassName="text-white/80"
        type="password"
        placeholder="••••••••"
        icon={<Lock size={15} />}
        error={formik.touched.confirmPassword ? formik.errors.confirmPassword : undefined}
        {...formik.getFieldProps('confirmPassword')}
      />

      <div className="space-y-1.5">
        <p className="text-sm font-medium text-white/80">I am a</p>
        <div className="grid grid-cols-2 gap-3">
          {ACCOUNT_TYPES.map(({ value, label, desc }) => (
            <button
              key={value}
              type="button"
              onClick={() => formik.setFieldValue('accountType', value)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                formik.values.accountType === value
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
        type="submit"
        disabled={formik.isSubmitting}
        className="w-full py-3 bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer"
      >
        {formik.isSubmitting ? 'Creating account…' : 'Create Account'}
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
    </form>
  )
}
