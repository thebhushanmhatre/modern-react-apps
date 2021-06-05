import BlogDetails from "./BlogDetails";
import {Link} from 'react-router-dom'

export default function BlogList({ blogs, handleDelete}) {
  return (
    <div>
      {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`} >
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </Link>
            {/* <button onClick={() => handleDelete(blog.id)}>Delete bog</button> */}
          </div>
        ))
      }
    </div>
  )
}
