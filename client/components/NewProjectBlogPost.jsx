import React, {useState} from 'react'
import {connect} from 'react-redux'
import {saveBlog} from '../apis/blog'

function NewProjectBlogPost(props) {

  const [state, setState] = useState({
    title: '',
    post: '',
    project_id: ''
  })

  console.log(props)

  const project = props.projects.find(el => {
    return el.id == props.match.params.id
  })

  console.log(project)
  
  const handleChange = (e) => {
    const {name, value} = e.target
    return setState({...state, [name]: value, project_id: props.match.params.id})
  }

  const handleSubmit = e => {
    e.preventDefault()
    saveBlog(props.user.id, state)
  }
  
    return (
      <>
        <h2 className='title'>{project.title}</h2>
        <p className='subtitle'>Blog Post</p>
        <form>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input className="input" placeholder="Title of blog post" type="text" name='title' value={state.title} onChange={handleChange}></input>
              </div>
            </div>  
          </div>
        </div>    

        <div className="field is-horizontal">  
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea className="textarea" placeholder="Write you blog post here!" type='text' name='post' value={state.post} onChange={handleChange}></textarea>
              </div>
            </div>
          </div>
        </div> 

        <div className="field is-horizontal">          
          <div className="field-body">
            <div className="field">
              <div className="control">
                <button className="button is-primary" onClick={handleSubmit}>
                  Post
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
    projects: globalState.projects,
    user: globalState.user
  }
}

export default connect (mapStateToProps)(NewProjectBlogPost)