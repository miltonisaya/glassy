export const AccountTypeEnum = {
  TRAVELLER: 'traveler',
  OPERATOR: 'operator',
} as const

export const SexEnum = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
} as const

export type AccountTypeEnum = typeof AccountTypeEnum[keyof typeof AccountTypeEnum]
export type SexEnum = typeof SexEnum[keyof typeof SexEnum]

export interface LoginPayload {
  email: string
  password: string
}

export interface RegisterPayload {
  firstName: string
  middleName: string
  lastName: string
  sex: SexEnum
  dateOfBirth: string
  mobile: string
  email: string
  password: string
  confirmPassword: string
  accountType: AccountTypeEnum
}

export interface AuthUser {
  id: string
  fullName: string
  email: string
  accountType: AccountTypeEnum
}

export interface AuthResponse {
  user: AuthUser
  accessToken: string
}
