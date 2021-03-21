import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <Link to='/' className='navbar-item'>Home</Link>
      <Link to='/userProjects' className="navbar-item">My Projects</Link>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          Create
              </a>

        <div className="navbar-dropdown">
          <Link to="/newPost" className="navbar-item"><p>Blog Post</p></Link>
          <Link to="/newProject" className="navbar-item"><p>Project</p></Link>
        </div>
      </div>

      
    </>
  )
}

export default NavBar