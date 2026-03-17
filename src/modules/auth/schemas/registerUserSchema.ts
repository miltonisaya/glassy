import * as Yup from 'yup'
import { AccountTypeEnum } from '../types'
import type { RegisterPayload } from '../types'

export const registerUserSchema: Yup.ObjectSchema<RegisterPayload> = Yup.object({
  firstName: Yup.string().min(2, 'At least 2 characters').required('First name is required'),
  middleName: Yup.string().default(''),
  lastName: Yup.string().min(2, 'At least 2 characters').required('Last name is required'),
  sex: Yup.string().required('Sex is required').oneOf(['Male', 'Female'], 'Select a valid option'),
  dateOfBirth: Yup.string().required('Date of birth is required'),
  mobile: Yup.string()
    .matches(/^(\+255|0)[67]\d{8}$/, 'Enter a valid Tanzanian number (e.g. 0712345678)')
    .required('Mobile number is required'),
  email: Yup.string().email('Enter a valid email').required('Email is required'),
  password: Yup.string().min(8, 'At least 8 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Please confirm your password'),
  accountType: Yup.mixed<AccountTypeEnum>()
    .oneOf(Object.values(AccountTypeEnum))
    .required('Account type is required'),
})
