import type { FormikProps } from 'formik'
import { Mail, Lock, User, Calendar, Phone } from 'lucide-react'
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
      {/* Name row */}
      <div className="grid grid-cols-2 gap-3">
        <Input
          label="First Name"
          labelClassName="text-white/80"
          type="text"
          placeholder="First name"
          icon={<User size={15} />}
          error={formik.touched.firstName ? formik.errors.firstName : undefined}
          {...formik.getFieldProps('firstName')}
        />
        <Input
          label="Middle Name"
          labelClassName="text-white/80"
          type="text"
          placeholder="Middle name"
          icon={<User size={15} />}
          error={formik.touched.middleName ? formik.errors.middleName : undefined}
          {...formik.getFieldProps('middleName')}
        />
      </div>

      {/* Last name + Email row */}
      <div className="grid grid-cols-2 gap-3">
        <Input
          label="Last Name"
          labelClassName="text-white/80"
          type="text"
          placeholder="Last name"
          icon={<User size={15} />}
          error={formik.touched.lastName ? formik.errors.lastName : undefined}
          {...formik.getFieldProps('lastName')}
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
      </div>

      {/* Mobile row */}
      <Input
        label="Mobile number"
        labelClassName="text-white/80"
        type="tel"
        placeholder="0712 345 678"
        icon={<Phone size={15} />}
        error={formik.touched.mobile ? formik.errors.mobile : undefined}
        {...formik.getFieldProps('mobile')}
      />

      {/* Sex + Date of Birth row */}
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <p className="text-sm font-medium text-white/80">Sex</p>
          <div
            onBlur={() => formik.setFieldTouched('sex', true)}
            className={`flex gap-4 h-[42px] items-center px-3 bg-white/50 backdrop-blur-sm border rounded-xl ${
              formik.touched.sex && formik.errors.sex ? 'border-red-400' : 'border-white/60'
            }`}
          >
            {['Male', 'Female'].map((option) => (
              <label key={option} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="sex"
                  value={option}
                  checked={formik.values.sex === option}
                  onChange={() => formik.setFieldValue('sex', option)}
                  className="accent-forest-500 w-3.5 h-3.5"
                />
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
          {formik.touched.sex && formik.errors.sex && (
            <p className="text-xs text-red-500">{formik.errors.sex}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <p className="text-sm font-medium text-white/80">Date of Birth</p>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <Calendar size={15} />
            </span>
            <input
              type="date"
              {...formik.getFieldProps('dateOfBirth')}
              className={`w-full bg-white/50 backdrop-blur-sm border rounded-xl py-3 pl-10 pr-4 text-sm text-gray-800 outline-none transition-all
                focus:border-forest-400 focus:ring-2 focus:ring-forest-400/20
                ${formik.touched.dateOfBirth && formik.errors.dateOfBirth ? 'border-red-400' : 'border-white/60'}`}
            />
          </div>
          {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
            <p className="text-xs text-red-500">{formik.errors.dateOfBirth}</p>
          )}
        </div>
      </div>

      {/* Password row */}
      <div className="grid grid-cols-2 gap-3">
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
      </div>

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
                  ? 'bg-forest-500/25 border-forest-400/60 text-white'
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
        className="w-full py-3 bg-forest-500 hover:bg-forest-600 disabled:opacity-60 text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer"
      >
        {formik.isSubmitting ? 'Creating account…' : 'Create Account'}
      </button>

      <p className="text-center text-sm text-white/60">
        Already have an account?{' '}
        <button
          type="button"
          onClick={onSwitch}
          className="text-forest-400 hover:text-forest-300 font-medium transition-colors cursor-pointer"
        >
          Sign in
        </button>
      </p>
    </form>
  )
}
