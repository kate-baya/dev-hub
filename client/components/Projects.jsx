import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getProjects} from '../apis/project'
import {setProjects} from '../actions'

function Projects (props) {

  useEffect(() => {
    getProjects()
    .then(projects => {
      props.dispatch(setProjects(projects))
    })
  }, [])

  console.log(props.projects)

  return (
    <div>
      <h3>Project List</h3>
      {props.projects.map(project => {
        return <p key={project.id}>{project.project_title}</p>
      })}
    </div>
  )
}

const mapStateToProps = (globalState) => {
  console.log(globalState)
  return {
    projects: globalState.projects
  }
}

export default connect(mapStateToProps)(Projects)