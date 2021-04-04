import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function ProjectList (props) {
  return (
    <>
      <h1 className='title'>Welcome {props.user.name}!</h1>
      <p className='subtitle'> Check out the latest popular projects</p>
      <p className='title'>Latest Projects</p>
      {props.projects.map(project => {
        return <div key={project.id}>
          <article className="tile is-child notification has-background-white-ter">
            <div className='content'>
              <div className='highlight'>
                <Link to={`/project/${project.id}`}>{project.title}</Link>
                <Link to={`/user/${project.user_id}`}>{project.user_name}</Link>
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
  console.log(globalState)
  return {
    user: globalState.user,
    projects: globalState.projects
  }
}

export default connect(mapStateToProps)(ProjectList)
