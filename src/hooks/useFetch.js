import { useState, useEffect } from 'react'

export default function useFetch(url, options) {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const res = await fetch(url, options)
      const json = await res.json()
      setResponse(json)
      setLoading(false)
      console.log('api fetched')
    })()
  }, [url, options])

  return [loading, response]
}
