import React from 'react'
import {connect} from 'react-redux'

class Project extends React.Component {
  findProject = () => {
    return this.props.projects.find(project => {
      return project.id == this.props.match.params.id
    })
  }
  
  render () {
    const project = this.findProject()

    return (
      <div>
        <h2>{project.title}</h2>
        <p>{project.about}</p>
        <div>
          <h4>Project blogs</h4>
        </div>
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    projects: globalState.projects
  }
}

export default connect(mapStateToProps)(Project)