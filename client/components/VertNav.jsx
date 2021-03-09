import React from 'react'
import {Link} from 'react-router-dom'

function VertNav () {
  return (
      <div className="vertNav">
        <h1>Dev-Hub</h1>
        <Link to='/'><p>Home</p></Link>
        <Link to="/newPost"><p>New Blog</p></Link>
        <Link to="/newProject"><p>New Project</p></Link>
      </div>
  )
}

export default VertNav