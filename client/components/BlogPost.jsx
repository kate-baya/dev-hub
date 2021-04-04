import React from 'react'
import { connect } from 'react-redux'

class BlogPost extends React.Component {
  findBlog = () => {
    return this.props.blog.find(blog => {
      return blog.id === this.props.match.params.id
    })
  }

  render () {
    const blog = this.findBlog()

    return (
      <>
        <div className="tile is-vertical is-child notification has-background-white-ter">
          <p className='title is-4'>{blog.title}</p>
          <p className='wrap'>{blog.post}</p>
        </div>
      </>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    blog: globalState.blog
  }
}

export default connect(mapStateToProps)(BlogPost)
