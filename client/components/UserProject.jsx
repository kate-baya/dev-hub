import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { saveFavorite, getProject } from '../apis/project'
import { getProjectPosts } from '../apis/blog'


function UserProject(props) {
  const [state, setState] = useState({
    project: [],
    posts: []
  })

  useEffect(() => {
    getProject(props.match.params.id)
      .then(project => {
        getProjectPosts(props.match.params.id, props.user.id)
          .then(posts => {
            console.log(project, posts)
            setState({ project, posts })
          })
      })
      .catch(error => {
        console.warn(JSON.stringify(error, null, 2));
      });
  }, []);

  const addToFavorites = (e) => {
    // console.log(this.props.user.id, favorite.id, favorite.title)
    saveFavorite(props.user.id, state.project[0].id, state.project[0].title)
  }

  return (
    <>
      <div className='hero is-primary'>
        <div className='hero-body'>
          <div className='columns'>
            <div className='column'>
              {state.project.map(el => {
                return <div key={el.id}>
                  <h2 className='title'>Project Title: {el.title}</h2>
                  <p className='subtitle'>About: {el.about}</p>
                </div>
              })}
            </div>
            <div className='column is-2'>
            {/* <Link to={`/newProjectPost/${project.id}`}><button className='button is-info top-margin-33'>Create Post</button></Link> */}
              <button className='button is-info vertical-space-4' onClick={() => addToFavorites()}>Favourite</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='vertical-space-6'></div>
        {state.posts.map(post => {
          return <div key={post.id}>
            <article className="tile is-child notification has-background-white-ter">
              <div className='content'>
                <div className='highlight'>
                  <Link to={`/blogPost/${post.id}`}><p>{post.title}</p></Link>
                </div>
              </div>
            </article>
            <div className="vertical-space-4"></div>
          </div>
        })}
      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    user: globalState.user
  }
}

export default connect(mapStateToProps)(UserProject)