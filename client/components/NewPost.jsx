import React, {useState} from 'react'
import {connect} from 'react-redux'

function NewPost (props) {
const [state, setState] = useState({
  title: 'title',
  text: 'text'
})

const handleChange = (e) => {
  e.preventDefault()
  const {name, value} = e.target
  setState({[name]: value})
}

const handleSubmit = e => {
  e.preventDefault()
  savePost(state)
}

  return (
    <div className="newPost">
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name='title' value={state.title} onChange={handleChange}></input>
        <label>Text</label>
        <input type='text' name='text' value={state.text} onChange={handleChange}></input>
        <input type='submit' value='Post'></input>
      </form>
    </div>
  )
}



export default connect ()(NewPost)