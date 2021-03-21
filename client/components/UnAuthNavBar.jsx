import React from 'react'
import {Link} from 'react-router-dom'

function UnAuthNavBar () {
  return (
      <div>
        <h1>Dev-Hub</h1>
        <Link to='/'><p>Home</p></Link>
        <Link to='/projects'>Projects</Link>
      </div>
  )
}

export default UnAuthNavBar