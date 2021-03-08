import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {setPosts} from '../actions'
import {getPosts} from '../apis/blog'


function Nav (props) {
  
  useEffect(() => {
    getPosts()
    .then(posts => {
      props.dispatch(setPosts(posts))
    })
  },[])
  
  return (
<div>
    <div className="nav">
      <h1>Dev-Hub</h1>
      <Link to="/newPost"><button type="button">New Blog</button></Link>
    </div>
      {props.blog.map((post) => {
        return <p key={post.id}>
        <Link to={`/blogPost/${post.id}`}>{post.title}</Link>
          </p>
      })}      
    </div>
  )
}

function mapStateToProps (globalState) {
  return {
    blog: globalState.blog
  }
}

export default connect(mapStateToProps)(Nav)