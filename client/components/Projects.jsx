import React from 'react'
import {connect} from 'react-redux'

function Projects (props) {
  return (
    props.projects.map(project => {
      return <Link to={`/projects/${project.id}`} key={project.id}><p>{project.title}</p><p>{project.about}</p></Link>
    })
  )
}

const mapStateToProps = (globalState) => {
  console.log(globalState)
  return {
    projects: globalState.projects
  }
}

export default connect(mapStateToProps)(Projects)