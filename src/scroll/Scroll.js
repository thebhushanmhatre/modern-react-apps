import { useState, useRef, useCallback } from 'react'
import useBookSearch from './useBookSearch'

export default function Scroll() {

  const [query, setQuery] = useState('')
  const [pageNum, setPageNum] = useState(1)
  
  const { loading, error, books, hasMore } = useBookSearch(query, pageNum)

  const observer = useRef()
  const lastBookRef = useCallback((node) => {
    if (loading) return
    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMore){
        setPageNum(prevPageNum => prevPageNum + 1)
      }
    })
    if(node) observer.current.observe(node)
  }, [loading, hasMore])


  return (
    <div>
      <input type="text" name="search" id="searchbox" value={query} placeholder='Search...'
        onChange={({ target }) => { setQuery(target.value) }} />
      {books.map((book, id) => {
        if(books.length === id+1){
          return <div ref={lastBookRef} key={id}>{id}. {book}</div>
        } else {
          return <div key={id}>{id}. {book}</div>

        }
      })}
      { loading && <div>Loading...</div>}
      { error && <div>Error</div>}
    </div>
  )
}
