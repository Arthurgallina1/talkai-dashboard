import create from 'zustand'

export const useAuthStore = create((set) => ({
  authenticated: false,
  loading: false,
  setAuthenticated: (value) => set({ authenticated: value })
}))
