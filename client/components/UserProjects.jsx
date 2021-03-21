import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUserProjects} from '../apis/project'
import {setProjects} from '../actions'

function UserProjects (props) {

  useEffect(() => {
    getUserProjects(props.user.id)
    .then(projects => {
      props.dispatch(setProjects(projects))
    })
  })

  return (
    <>
      <h3 className='title'>Project List</h3>
      {props.projects.map(project => {
        return <Link to={`/userProjects/${project.id}`} key={project.id}><p>{project.title}</p></Link>
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