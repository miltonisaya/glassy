import { useFormik } from 'formik'
import { loginSchema } from '../schemas/login.schema'
import { authService } from '../auth.service'
import type { LoginPayload } from '../types'

interface UseLoginFormOptions {
  onSuccess: () => void
}

export function useLoginForm({ onSuccess }: UseLoginFormOptions) {
  return useFormik<LoginPayload>({
    initialValues: { email: '', password: '' },
    validationSchema: loginSchema,
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      try {
        await authService.login(values)
        onSuccess()
        console.log("Processing login!")
      } catch {
        setFieldError('email', 'Invalid email or password')
      } finally {
        setSubmitting(false)
      }
    },
  })
}
