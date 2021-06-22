import { useState, useEffect } from 'react'

import api from 'services/api'
import history from 'services/history'
import { useAuthStore } from 'store'

export default function useAuth() {
  // const [authenticated, setAuthenticated] = useState(false)
  const { authenticated, setAuthenticated } = useAuthStore()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('talk@token')

    if (token) {
      console.log('fetched from localStorage')
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
      setAuthenticated(true)
    }

    setLoading(false)
  }, [])

  async function handleLogin() {
    // const {
    //   data: { token }
    // } = await api.post('/authenticate', data)
    const token = 123
    console.log('login okay')
    localStorage.setItem('talk@token', JSON.stringify(token))
    api.defaults.headers.Authorization = `Bearer ${token}`
    setAuthenticated(true)
    history.push('/geral')
  }

  function handleLogout() {
    setAuthenticated(false)
    localStorage.removeItem('talk@token')
    api.defaults.headers.Authorization = undefined
    history.push('/sign-in')
  }

  return { authenticated, loading, handleLogin, handleLogout }
}
