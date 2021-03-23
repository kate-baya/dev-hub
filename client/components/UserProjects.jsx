import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUserProjects } from '../apis/project'

function UserProjects(props) {
  const [state, setState] = useState({
    projects: []
  })

    useEffect(() => {
    getUserProjects(props.user.id)
      .then(projects => {
        setState({
          projects
        })
      })
  }, [])

  return (
    <>
      <p className='title'>My Projects</p>
      {state.projects.map(project => {
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
    user: globalState.user
  }
}

export default connect(mapStateToProps)(UserProjects)