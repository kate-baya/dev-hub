import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function ProjectList(props) {

  const newest = props.projects.sort(function (a, b) {
    return b.id - a.id}
  )

  return (
    <>
      <p className='title'>Latest Projects</p>
      {props.projects.map(project => {
        return <div key={project.id}>
          <article className="tile is-child notification has-background-white-ter">
            <div className='content'>
              <div className='highlight'>
                <p>
                <Link to={`/project/${project.id}`}>{project.title}</Link>
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
    projects: globalState.projects
  }
}

export default connect(mapStateToProps)(ProjectList)