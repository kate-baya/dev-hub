import React, {useState} from 'react'
import {connect} from 'react-redux'
import {createNewProject} from '../apis/project'

function NewProject (props) {

  const [state, setState] = useState({
    title: 'Title',
    about: 'Tell everyone a little about your project!'
  })

  const handleChange = e => {
    const {name, value} = e.target
    return setState({...state, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    createNewProject(state, props.user.id)
  }

  return (
    <div className='hero-body'>
    <h2 className='title'>New Project</h2>
    <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input type='text' name='title' value={state.title} onChange={handleChange}></input>
    <label>About</label>
    <textarea type='text' name='about' value={state.about} onChange={handleChange}></textarea>
    <input type='submit' value="Create Project"></input>
    </form>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    user: globalState.user
  }
}

export default connect(mapStateToProps)(NewProject)