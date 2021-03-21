import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {setPosts} from '../actions'
import {getPosts} from '../apis/blog'


function RecentPosts (props) {
  
  useEffect(() => {
    getPosts()
    .then(posts => {
      props.dispatch(setPosts(posts))
    })
  })
  
  return (
    <>
    <p className='title'>Recent Posts</p>
      {props.blog.map((post) => {
        return <p key={post.id}>
        <Link to={`/blogPost/${post.id}`}>{post.title}</Link>
          </p>
      })}
    </>
  )
}

function mapStateToProps (globalState) {
  return {
    blog: globalState.blog
  }
}

export default connect(mapStateToProps)(RecentPosts)