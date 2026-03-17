import apiClient from '../../lib/apiClient'
import type { LoginPayload, RegisterPayload, AuthResponse } from './types'

export const authService = {
  async login(payload: LoginPayload): Promise<AuthResponse> {
    const { data } = await apiClient.post<AuthResponse>('/api/auth/login', payload)
    localStorage.setItem('access_token', data.accessToken)
    return data
  },

  async register(payload: Omit<RegisterPayload, 'confirmPassword'>): Promise<AuthResponse> {
    const { data } = await apiClient.post<AuthResponse>('/api/v1/users/register', payload)
    console.log("The url =>",data);
    // localStorage.setItem('access_token', data.accessToken)
    return data
  },

  logout(): void {
    localStorage.removeItem('access_token')
  },
}
