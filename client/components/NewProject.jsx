import React, {useState} from 'react'
import {connect} from 'react-redux'
import {createNewProject} from '../apis/project'

function NewProject (props) {

  const [state, setState] = useState({
    title: '',
    about: ''
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
    <>
    <h2 className='title'>New Project</h2>
      <form>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Title</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input className='input' placeholder="Project title" type='text' name='title' value={state.title} onChange={handleChange}></input>
              </div>
            </div>  
          </div>
        </div>  

        <div className="field is-horizontal">  
          <div className="field-label is-normal">   
            <label className="label">About</label>
          </div>  
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea className='input' placeholder="Tell everyone a little about your project!"  type='text' name='about' value={state.about} onChange={handleChange}></textarea>
              </div>
            </div>
          </div>
        </div> 

        <div className="field is-horizontal">          
          <div className="field-label">
          </div>  
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <button className="button is-primary" onClick={handleSubmit}>
                    Create Project
                  </button>
                </div>
              </div>
            </div>   
          </div>    
        </form>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    user: globalState.user
  }
}

export default connect(mapStateToProps)(NewProject)