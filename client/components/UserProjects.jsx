import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUserProjects } from '../apis/project'
import { setProjects } from '../actions'

function UserProjects(props) {

  useEffect(() => {
    getUserProjects(props.user.id)
      .then(projects => {
        props.dispatch(setProjects(projects))
      })
  })

  return (
    <>
      <p className='title'>Project List</p>
      {props.projects.map(project => {
        return <div key={project.id}>
          <article className="tile is-child notification has-background-white-ter">
            <div className='content'>
              <div className='highlight'>
                <p>
                  <Link to={`/userProjects/${project.id}`}>{project.title}</Link>
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
    projects: globalState.projects,
    user: globalState.user
  }
}

export default connect(mapStateToProps)(UserProjects)