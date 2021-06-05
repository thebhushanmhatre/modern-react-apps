import { useState, useEffect } from 'react'

export default function useFetch(url) {

  const [data, setData] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCont = new AbortController()

    fetch(url, { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch data for that resource')
        }
        return res.json()
      })
      .then(data => {
        setData(data)
        setIsPending(false)
        setError(null)
      })
      .catch(err => {
        if (err.name === 'AbortError'){
          console.log('fetch aborted')
        } else {
          setError(err.message)
          setIsPending(false)
        }
      })

    // return () => console.log('cleaup')
    return () => abortCont.abort()
  }, [url])

  return { data, isPending, error}

}