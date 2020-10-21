import { useState, useEffect } from 'react'
import axios from 'axios'

export const useAxios = (url, opts) => {
  const [response, setResponse] = useState([])
  const [loading, setLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios(url, opts)
      .then((res) => {
        setResponse(res.data)
        setLoading(false)
      })
      .catch(() => {
        setHasError(true)
        setLoading(false)
      })
  }, [url])
  return [response, loading, hasError]
}
