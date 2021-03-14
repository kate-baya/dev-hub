import React,{useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import {fetchUser} from '../actions'

import UnAuthHome from './UnAuthHome'
import Home from './Home'
import RecentPosts from './RecentPosts'
import NewPost from './NewPost'
import BlogPost from './BlogPost'
import NavBar from './NavBar'
import NewProject from './NewProject'
import UserProjects from './UserProjects'
import UserProject from './UserProject'
import NewProjectBlogPost from './NewProjectBlogPost'
import UnAuthNavBar from './UnAuthNavBar'

function App (props) {

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
      props.dispatch(fetchUser(user))
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
      <Route path='/' exact={true} render={(user) => (<Home user={user} component={Home} />)} />
      <Route path="/blogPost/:id" component={BlogPost} />
      <Route path="/newPost" component={NewPost} />
      <Route path='/newProject' component={NewProject} />
      <Route path='/userProjects' exact={true} component={UserProjects} />
      <Route path='/userProjects/:id' component={UserProject} />
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
      <UnAuthNavBar />
    <div className="mainModule">
      <RecentPosts />
      <div className='home'>
      <GoogleLogin
      clientId="1024724715081-t0plpqqmnkrqvoit0700ul3kn2ken5ci.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      isSignedIn={true}
      cookiePolicy={'single_host_origin'}
      />
      <Route path='/' exact={true} component={UnAuthHome} />
      <Route path="/blogPost/:id" component={BlogPost} />
      </div>
    </div>
    </Router>
  </div>
  )
}

export default connect()(App)
