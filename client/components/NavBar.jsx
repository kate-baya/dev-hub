import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="navBar">
      <img src="/images/truth.jpg" alt="" />
      <h1>Dev-Hub</h1>
      <Link to='/'><p>Home</p></Link>
      <Link to="/newPost"><p>New Blog</p></Link>
      <Link to="/newProject"><p>New Project</p></Link>
      <Link to='/userProjects'>My Projects</Link>
    </div>
  )
}

export default NavBar