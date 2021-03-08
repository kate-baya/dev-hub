import React from 'react'
import {connect} from 'react-redux'

class BlogPost extends React.Component {

  findBlog = () => { 
    return this.props.blog.find(blog => {
    return blog.id == this.props.match.params.id
    })
  }
    
  render () {
    const blog = this.findBlog()

    return (
      <div>
      <p>{blog.title}</p>
      <p>{blog.post}</p>
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    blog: globalState.blog
  }
}

export default connect(mapStateToProps)(BlogPost)