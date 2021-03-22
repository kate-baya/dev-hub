import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { setPosts } from '../actions'
import { getPosts } from '../apis/blog'


function RecentPosts(props) {

  useEffect(() => {
    getPosts()
      .then(posts => {
        props.dispatch(setPosts(posts))
      })
  })

  return (
    <>
        <article className="message is-primary">
          <div className='message-header spacer'>
            <p className='title is-5'>Recent Posts</p>
          </div>

          <div className='message-body'>
            <div className='content'>
              {props.blog.map((post) => {
                return <div className='highlight' key={post.id}>
                  <p>
                    <Link to={`/blogPost/${post.id}`}>{post.title}</Link>
                  </p>
                </div>
              })}
            </div>
          </div>
        </article>
    </>
  )
}

function mapStateToProps(globalState) {
  return {
    blog: globalState.blog
  }
}

export default connect(mapStateToProps)(RecentPosts)