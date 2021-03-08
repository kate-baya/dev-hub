import React from 'react'
import {Link} from 'react-router-dom'

function VertNav () {
  return (
      <div className="vertNav">
        <h1>Dev-Hub</h1>
        <Link to="/newPost"><button type="button">New Blog</button></Link>
      </div>
  )
}

export default VertNav