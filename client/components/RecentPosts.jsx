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
    <div>
    <div className="sideBar">
      <h3 className="recentPosts">Recent Posts</h3>
      <div className="blogList">
        {props.blog.map((post) => {
          return <p key={post.id}>
          <Link to={`/blogPost/${post.id}`}>{post.title}</Link>
            </p>
        })}
      </div>      
    </div>
    </div>
  )
}

function mapStateToProps (globalState) {
  return {
    blog: globalState.blog
  }
}

export default connect(mapStateToProps)(RecentPosts)