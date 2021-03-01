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

  console.log(props.blog[0])
  
  return (
<div>
  {console.log('rendered')}
    <div className="nav">
      <h1>Dev-Hub</h1>
      <Link to="/newPost"><button type="button">New Blog</button></Link>
    </div>
      <ul>
      {props.blog.map((post, i) => {
        return <li key={i}>{post.title}</li>
      })}
      </ul>
      </div>
  )
}

function mapStateToProps (globalState) {
  return {
    blog: globalState.blog
  }
}

export default connect(mapStateToProps)(Nav)