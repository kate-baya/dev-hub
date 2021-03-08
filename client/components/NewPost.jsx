import React, {useState} from 'react'
import {connect} from 'react-redux'
import { saveBlog } from '../apis/blog'

function NewPost (props) {
const [state, setState] = useState({
  title: '',
  post: ''
})

const handleChange = (e) => {
  const {name, value} = e.target
  return setState({...state, [name]: value})
}

const handleSubmit = e => {
  e.preventDefault()
  console.log(state)
  saveBlog(state)
}

  return (
    <div className="newPost">
      <h2>New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name='title' value={state.title} onChange={handleChange}></input>
        <label>Text</label>
        <input type='text' name='post' value={state.post} onChange={handleChange}></input>
        <input type='submit' value='Post'></input>
      </form>
    </div>
  )
}

export default connect ()(NewPost)