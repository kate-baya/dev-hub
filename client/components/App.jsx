import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'

import { fetchUser, setPosts, setProjects } from '../actions'
import { getPosts } from '../apis/blog'
import { getProjects } from '../apis/project'

import UnAuthHome from './UnAuthHome'
import Favorites from './Favorites'
import NewPost from './NewPost'
import BlogPost from './BlogPost'
import NavBar from './NavBar'
import NewProject from './NewProject'
import UserProfile from './UserProfile'
import Project from './Project'
import UserProject from './UserProject'
import NewProjectBlogPost from './NewProjectBlogPost'
import UnAuthNavBar from './UnAuthNavBar'
import BlogList from './BlogList'
import ProjectList from './ProjectList'

function App (props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const [user, setUser] = useState({ user_id: '', name: '', image: '', email: '' })

  const responseGoogle = (response) => {
    const profile = response.getBasicProfile()

    setUser({
      id: profile.getId(),
      name: profile.getName(),
      image: profile.getImageUrl(),
      email: profile.getEmail()
    })
  }

  useEffect(() => {
    if (user.email.length > 0 || user.name.length > 0) { setIsAuthenticated(true) }
    props.dispatch(fetchUser(user))
  }, [user])

  const logout = () => {
    setUser({ user_id: '', name: '', image: '', email: '' })
    setIsAuthenticated(false)
  }

  useEffect(() => {
    getPosts()
      .then(posts => {
        return props.dispatch(setPosts(posts))
      })
      .catch(err => console.log(err))
    getProjects()
      .then(projects => {
        return props.dispatch(setProjects(projects))
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      {isAuthenticated ? <AuthenticatedView user={user} logout={logout} /> : <UnAuthenticatedView responseGoogle={responseGoogle} />}
    </div>
  )
}

const AuthenticatedView = ({ user, logout }) => {
  return (
    <>
      <Router>
        <NavBar logout={logout} user={user}/>
        <section className="hero has-background-grey-lighter">
          <div className='hero-body'>
            <div className='container'>
              <div className='columns'>
                <Favorites />
                <div className="columnSpacer"></div>
                <div className='column is-four-fifths' style={{ paddingTop: '0px' }}>
                  <Route path='/' exact={true} component={ProjectList} />
                  <Route path="/blogPost/:id" component={BlogPost} />
                  <Route path="/newPost" component={NewPost} />
                  <Route path='/newProject' component={NewProject} />
                  <Route path='/user/:id' exact={true} component={UserProfile} />
                  <Route path='/userProjects/:id' component={UserProject} />
                  <Route path="/newProjectPost/:id" component={NewProjectBlogPost} />
                  <Route path='/project/:id' exact={true} component={Project} />
                  <Route path='/blogs' component={BlogList} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Router>
    </>
  )
}

const UnAuthenticatedView = ({ responseGoogle }) => {
  return (
    <>
      <Router>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className='container'>
            <div className="navbar-brand">
              <Link to='/' className="navbar-item">
                <img src='../images/devhub.png' alt="Dev-Hub: A blog site to journal your coding projects" width="112" height="28" />
              </Link>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <UnAuthNavBar />
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <GoogleLogin
                      clientId="1024724715081-t0plpqqmnkrqvoit0700ul3kn2ken5ci.apps.googleusercontent.com"
                      buttonText="Login"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      isSignedIn={true}
                      cookiePolicy={'single_host_origin'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <section className="hero is-primary">
          <div className='hero-body'>
            <div className='container'>
              <div className="columns">
                <div className="column">
                </div>
                <div className="column is-7">
                  <Route path='/' exact={true} component={UnAuthHome} />
                  <Route path='/blogs' component={BlogList} />
                  <Route path="/blogPost/:id" component={BlogPost} />
                  <Route path='/projects' exact={true} component={ProjectList} />
                  <Route path='/project/:id' exact={true} component={Project} />
                </div>
                <div className="column">
                </div>
              </div>
            </div>
          </div>
        </section>
      </Router>
    </>
  )
}

export default connect()(App)
