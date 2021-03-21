import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class UserProject extends React.Component {
  findProject = () => {
    return this.props.projects.find(project => {
      return project.id == this.props.match.params.id
    })
  }

  filterProjectBlogPosts = () => {
    return this.props.blog.filter(blog => {
      return blog.project_id == this.props.match.params.id
    })
  }

  componentDidMount(){
    this.filterProjectBlogPosts()
  }
  
  render () {
    const project = this.findProject()
    const blogs = this.filterProjectBlogPosts()
    return (
      <>
        <h2 className='title'>{project.title}</h2>
        <p className='subtitle'>{project.about}</p>
        <div>
          <h4>Project blogs</h4>
          <Link to={`/newProjectPost/${project.id}`}><p>Create Post</p></Link>
          {blogs.map(blog => {
            return <Link to={`/blogPost/${blog.id}`}key={blog.id}><p>{blog.title}</p></Link>
          })}
        </div>
      </>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    projects: globalState.projects,
    blog: globalState.blog
  }
}

export default connect(mapStateToProps)(UserProject)