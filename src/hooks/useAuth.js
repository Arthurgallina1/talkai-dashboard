import { useEffect } from 'react'

import strapiApi from 'services/strapiApi'
import history from 'services/history'
import { useAuthStore } from 'store'

export default function useAuth() {
  // const [authenticated, setAuthenticated] = useState(false)
  const {
    authenticated,
    setTeste,
    setAuthenticated,
    setUser,
    loading,
    setLoading
  } = useAuthStore()

  useEffect(() => {
    const token = localStorage.getItem('talk@token')
    if (token) {
      // console.log('fetched token', token)
      strapiApi.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
      setAuthenticated(true)
    }

    setLoading(false)
  }, [])

  async function handleLogin(data) {
    const {
      data: { jwt, user }
    } = await strapiApi.post('/auth/local', data)

    console.log('login okay')
    localStorage.setItem('talk@token', JSON.stringify(jwt))
    strapiApi.defaults.headers.Authorization = `Bearer ${jwt}`
    setAuthenticated(true)
    setUser(user)
    setTeste()
    console.debug('user', user)
    history.push('/geral')
  }

  function handleLogout() {
    delete strapiApi.defaults.headers.common['Authorization']
    setAuthenticated(false)
    localStorage.removeItem('talk@token')
    history.push('/sign-in')
  }

  return { authenticated, loading, handleLogin, handleLogout }
}
