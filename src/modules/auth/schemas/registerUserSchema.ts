import * as Yup from 'yup'
import { AccountTypeEnum } from '../types'
import type { RegisterPayload } from '../types'

export const registerUserSchema: Yup.ObjectSchema<RegisterPayload> = Yup.object({
  fullName: Yup.string().min(2, 'Name must be at least 2 characters').required('Full name is required'),
  email: Yup.string().email('Enter a valid email').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Please confirm your password'),
  accountType: Yup.mixed<AccountTypeEnum>()
    .oneOf(Object.values(AccountTypeEnum))
    .required('Account type is required'),
})
