import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {saveFavorite} from '../apis/project'

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

  componentDidMount() {
    this.filterProjectBlogPosts()
  }

  addToFavorites (e) {
    e.preventDefault()
    const favorite = this.findProject()
    console.log(this.props.user.id, favorite.id, favorite.title)
    saveFavorite(this.props.user.id, favorite.id, favorite.title)
  }

  render() {
    const project = this.findProject()
    const blogs = this.filterProjectBlogPosts()
    return (
      <>
        <div className='hero is-primary'>
          <div className='hero-body'>
            <div className='columns'>
              <div className='column'>
                {/* <h2 className='title'>Project Title: {project.title}</h2> */}
                {/* <p className='subtitle'>About: {project.about}</p> */}
              </div>
              <div className='column is-2'>
              {/* <Link to={`/newProjectPost/${project.id}`}><button className='button is-info top-margin-33'>Create Post</button></Link> */}
              <button className='button is-info vertical-space-4' onClick={(e) => this.addToFavorites()}>Favourite</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='vertical-space-6'></div>
          {/* {blogs.map(blog => {
            return <div key={blog.id}>
              <article className="tile is-child notification has-background-white-ter">
                <div className='content'>
                  <div className='highlight'>
                    <Link to={`/blogPost/${blog.id}`}><p>{blog.title}</p></Link>
                  </div>
                </div>
              </article>
              <div className="vertical-space-4"></div>
            </div>
          })} */}
        </div>
      </>
    )
  }
}

const mapStateToProps = (globalState) => {
  console.log(globalState)
  return {
    projects: globalState.projects,
    blog: globalState.blog
  }
}

export default connect(mapStateToProps)(Project)