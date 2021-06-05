import useFetch from './useFetch'
import BlogList from './BlogList'

export default function Home() {

  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

  // const handleDelete = (id) => {
  //   let newBlogs = blogs.filter((blog)=> blog.id !== id)
  //   setBlogs(newBlogs)
  // }

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
      {/* {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} />} */}
    </div>
  )
}