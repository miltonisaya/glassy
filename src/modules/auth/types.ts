export const AccountTypeEnum = {
  TRAVELLER: 'traveler',
  OPERATOR: 'operator',
} as const

export type AccountTypeEnum = typeof AccountTypeEnum[keyof typeof AccountTypeEnum]

export interface LoginPayload {
  email: string
  password: string
}

export interface RegisterPayload {
  fullName: string
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
