import React, { useState } from 'react'
import { connect } from 'react-redux'
import { saveBlog } from '../apis/blog'

function NewPost (props) {
  const [state, setState] = useState({
    title: '',
    post: '',
    project_id: '0'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    return setState({ ...state, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    saveBlog(props.user.id, props.user.name, state)
  }

  return (
    <>
      <h2 className='title'>New Blog Post</h2>
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
    user: globalState.user
  }
}

export default connect(mapStateToProps)(NewPost)
