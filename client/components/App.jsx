import React,{useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

import Home from './Home'
import RecentPosts from './RecentPosts'
import NewPost from './NewPost'
import BlogPost from './BlogPost'
import NavBar from './NavBar'
import NewProject from './NewProject'
import UserProjects from './UserProjects'
import Project from './Project'
import NewProjectBlogPost from './NewProjectBlogPost'

function App () {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const [user, setUser] = useState({user_id: '', name: '', image: '', email: ''})

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
    if (user.email.length > 0 || user.name.length > 0)
      setIsAuthenticated(true)
  }, [user])

  const logout = () => {
    setUser({user_id: '', name: '', image: '', email: ''})
    setIsAuthenticated(false)
  }

    return (
      <div className='app'>
        {isAuthenticated ? <AuthenticatedView user={user} logout={logout}/> : <UnAuthenticatedView responseGoogle={responseGoogle} />}
      </div>
    )
  }
  
  const AuthenticatedView = ({user, logout}) => {
    return (
    <div className='authenticated'>
    <Router>
    <div className='app'>
    <GoogleLogout
      clientId="1024724715081-t0plpqqmnkrqvoit0700ul3kn2ken5ci.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logout}
    />
      <NavBar />
      <div className="mainModule">
      <RecentPosts />
      <div className='home'>
      <Route path='/' exact={true} component={Home} />
      <Route path="/blogPost/:id" component={BlogPost} />
      <Route path="/newPost" component={NewPost} />
      <Route path='/newProject' component={NewProject} />
      <Route path='/userProjects' exact={true} component={UserProjects} />
      <Route path='/userProjects/:id' component={Project} />
      <Route path="/newProjectPost/:id" component={NewProjectBlogPost} />
      </div>
      </div>
    </div>
    </Router>

  </div>
  )
}

const UnAuthenticatedView = ({responseGoogle}) => {
  return (
  <div className='unAuthenticated'>
      <Router>
    <div className='home'>
      <Route path='/' exact={true} component={Home} />
    <GoogleLogin
    clientId="1024724715081-t0plpqqmnkrqvoit0700ul3kn2ken5ci.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    isSignedIn={true}
    cookiePolicy={'single_host_origin'}
    />
    </div>
    </Router>
  </div>
  )
}

export default connect()(App)
