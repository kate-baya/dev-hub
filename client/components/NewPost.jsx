import React, {useState} from 'react'
import {connect} from 'react-redux'
import { saveBlog } from '../apis/blog'

function NewPost (props) {
const [state, setState] = useState({
  title: '',
  post: '',
  project_id: '0'
})

const handleChange = (e) => {
  const {name, value} = e.target
  return setState({...state, [name]: value})
}

const handleSubmit = e => {
  e.preventDefault()
  saveBlog(props.user.id, state)
}

  return (
    <div className="new">
      <h2>New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <label>Title:</label>
        <input type="text" name='title'  value={state.title} onChange={handleChange}></input>
        </div>
        <div>
        <label>Text:</label>
        <textarea type='text' name='post' value={state.post} onChange={handleChange}></textarea>
        </div>
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

export default connect (mapStateToProps)(NewPost)