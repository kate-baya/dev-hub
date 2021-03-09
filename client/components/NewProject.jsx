import React, {useState} from 'react'
import {createNewProject} from '../apis/project'

function NewProject () {

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
    createNewProject(state)
  }

  return (
    <div className='new'>
    <h2>New Project</h2>
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

export default NewProject