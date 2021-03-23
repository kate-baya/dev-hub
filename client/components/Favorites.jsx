import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { setFavorites } from '../actions'
import { getFavorites } from '../apis/project'


function Favorites(props) {

  useEffect(() => {
    getFavorites(props.user.id)
      .then(favorites => {
        props.dispatch(setFavorites(favorites))
      })
  })

  return (
    <>
        <article className="message is-primary">
          <div className='message-header spacer'>
            <p className='title is-5'>Favorite Projects</p>
          </div>

          <div className='message-body'>
            <div className='content'>
              {props.favorites.map((project) => {
                return <div className='highlight' key={project.id}>
                  <p>
                    <Link to={`/project/${project.project_id}`}>{project.title}</Link>
                  </p>
                </div>
              })}
            </div>
          </div>
        </article>
    </>
  )
}

function mapStateToProps(globalState) {
  return {
    user: globalState.user,
    favorites: globalState.favorites
  }
}

export default connect(mapStateToProps)(Favorites)