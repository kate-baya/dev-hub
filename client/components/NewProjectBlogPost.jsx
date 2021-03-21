import React, {useState} from 'react'
import {connect} from 'react-redux'
import {saveBlog} from '../apis/blog'

function NewProjectBlogPost(props) {

  const [state, setState] = useState({
    title: '',
    post: '',
    project_id: ''
  })
  
  const handleChange = (e) => {
    const {name, value} = e.target
    return setState({...state, [name]: value, project_id: props.match.params.id})
  }

  const handleSubmit = e => {
    e.preventDefault()
    saveBlog(props.user.id, state)
  }
  
    return (
      <div className='hero-body'>
        <h2 className='title'>New Project Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input type="text" name='title'  value={state.title} onChange={handleChange}></input>
          <label>Text:</label>
          <textarea type='text' name='post' value={state.post} onChange={handleChange}></textarea>
          <input type='submit' value='Post'></input>
        </form>
      </div>
    )
}

const mapStateToProps = (globalState) => {
  return {
    user: globalState.user
  }
}

export default connect (mapStateToProps)(NewProjectBlogPost)