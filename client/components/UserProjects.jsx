import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getProjects} from '../apis/project'
import {setProjects} from '../actions'

function UserProjects (props) {

  useEffect(() => {
    getProjects()
    .then(projects => {
      props.dispatch(setProjects(projects))
    })
  }, [])

  return (
    <div>
      <h3>Project List</h3>
      {props.projects.map(project => {
        return <Link to={`/userProjects/${project.id}`} key={project.id}><p>{project.title}</p></Link>
      })}
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    projects: globalState.projects
  }
}

export default connect(mapStateToProps)(UserProjects)