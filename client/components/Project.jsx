import React, {useEffect} from 'react'
import {connect} from 'react-redux'

class Project extends React.Component {
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
  
  render () {
    const project = this.findProject()
    const blogs = this.filterProjectBlogPosts()
    return (
      <div>
        <h2>{project.title}</h2>
        <p>{project.about}</p>
        <div>
          <h4>Project blogs</h4>
          {blogs.map(blog => {
            return <p key={blog.id}>{blog.title}</p>
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    projects: globalState.projects,
    blog: globalState.blog
  }
}

export default connect(mapStateToProps)(Project)