import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function About() {
  const [title, setTitle] = useState('Name')
  const [body, setBody] = useState('Saare jaahan se Acha, Hindustaan hamara')
  const [author, setAuthor] = useState('jay')
  const [isPending, setIsPending] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = {title, body, author}
    setIsPending(true)
    
    fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify(blog)
      })
      .then(()=> {
        console.log('New blog added')
        setIsPending(false)
        // history.go(-1) // Go Back
        history.push('/')
      })
  }

  return (
    <div className="create">
      <h2>Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input type="text" value={title} 
        onChange={e=>setTitle(e.target.value)} required />
        <label>Blog Body</label>
        <textarea value={body}
          onChange={e => setBody(e.target.value)} required></textarea>
        <label>Blog Author</label>
        <select value={author}
          onChange={e => setAuthor(e.target.value)} >
          <option value="jay">jay</option>
          <option value="veeru">veeru</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>

      <div>{title}</div>
      <div>{body}</div>
      <div>{author}</div>
    </div>
  )
}
