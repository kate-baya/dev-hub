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
      <>
          <h2 className='title'>{blog.title}</h2>
          <p>{blog.post}</p>
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