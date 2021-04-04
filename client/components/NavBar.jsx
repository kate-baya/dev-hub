import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { GoogleLogout } from 'react-google-login'

function NavBar ({ user, logout }) {
  return (
    <>
      <nav className="navbar stick" role="navigation" aria-label="main navigation">
        <div className='container'>
          <div className="navbar-brand">
            <Link to='/' className="navbar-item">
              <img src='../images/devhub.png' alt="Dev-Hub: A blog site to journal your coding projects" width="112" height="28" />
            </Link>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link to='/' className='navbar-item'>Home</Link>
              <Link to={`/user/${user.id}`} className="navbar-item">My Projects</Link>
              <Link to='/blogs' className="navbar-item">Blog List</Link>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  Create
                </a>

                <div className="navbar-dropdown">
                  <Link to="/newPost" className="navbar-item"><p>Blog Post</p></Link>
                  <Link to="/newProject" className="navbar-item"><p>Project</p></Link>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className='navbar-item has-dropdown is-hoverable'>
                <a className='navbar-link'>
                  <img src={user.image} />
                  <p className='horizontal-space-6'>{user.name}</p>
                </a>
                <div className="navbar-dropdown">
                  <div className="navbar-item">
                    <div className="buttons">
                      <GoogleLogout
                        clientId="1024724715081-t0plpqqmnkrqvoit0700ul3kn2ken5ci.apps.googleusercontent.com"
                        buttonText="Logout"
                        onLogoutSuccess={logout}
                        className="button is-light" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    user: globalState.user
  }
}

export default connect(mapStateToProps)(NavBar)
