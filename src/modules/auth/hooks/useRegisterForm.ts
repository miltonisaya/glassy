import { useFormik } from 'formik'
import { registerUserSchema } from '../schemas/registerUserSchema.ts'
import { authService } from '../auth.service'
import { AccountTypeEnum } from '../types'
import type { RegisterPayload } from '../types'

interface UseRegisterFormOptions {
  onSuccess: () => void
}

export function useRegisterForm({ onSuccess }: UseRegisterFormOptions) {
  return useFormik<RegisterPayload>({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      accountType: AccountTypeEnum.TRAVELLER,
    },
    validationSchema: registerUserSchema,
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      const { confirmPassword, ...payload } = values
      try {
        await authService.register(payload)
        onSuccess()
      } catch {
        setFieldError('email', 'An account with this email already exists')
      } finally {
        setSubmitting(false)
      }
    },
  })
}
