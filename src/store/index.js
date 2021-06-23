import create from 'zustand'

export const useAuthStore = create((set) => ({
  authenticated: false,
  setAuthenticated: (value) => set({ authenticated: value }),
  loading: false,
  setLoading: (value) => set({ loading: value }),
  user: {},
  setUser: (value) => set({ user: value }),
  test: 0,
  setTeste: () => set((state) => ({ test: state.test + 1 }))
}))
