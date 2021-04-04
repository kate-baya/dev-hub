import React from 'react'
import { Link } from 'react-router-dom'

function UnAuthNavBar () {
  return (
    <>
      <Link to='/' className='navbar-item'><p>Home</p></Link>
      <Link to='/projects' className="navbar-item">Projects</Link>
      <Link to='/blogs' className="navbar-item">Blog Posts</Link>
    </>
  )
}

export default UnAuthNavBar
