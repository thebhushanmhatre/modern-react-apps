import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2><Link to="/">Dojo Blog</Link></h2>
      <div className="links">
        <Link to="/">Home</Link>
      </div>
      <div className="links">
        <Link to="/create">Create</Link>
      </div>
      <div className="links">
        <Link to="/scroll">ScrollApp</Link>
      </div>
    </nav>
  )
}
