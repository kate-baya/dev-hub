import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function BlogList (props) {
  return (
    <>
      <p className='title'>Latest Blogs</p>
      {props.blog.map(post => {
        return <div key={post.id}>
          <article className="tile is-child notification has-background-white-ter">
            <div className='content'>
              <div className='highlight'>
                <p>
                  <Link to={`/blogPost/${post.id}`}>{post.title}</Link>
                </p>
              </div>
            </div>
          </article>
          <div className="vertical-space-4"></div>
        </div>
      })}
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    blog: globalState.blog
  }
}

export default connect(mapStateToProps)(BlogList)
