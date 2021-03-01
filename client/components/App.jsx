import React from 'react'
import { connect } from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'

import { fetchFruits } from '../actions'

import Home from './Home'
import Nav from './Nav'
import NewPost from './NewPost'

function App () {
    return (
      <Router>
      <div className='app'>
        <Nav />
        <Route path='/' exact={true} component={Home} />
        <Route path="/newPost" component={NewPost} />
      </div>
      </Router>
    )
}

function mapStateToProps (globalState) {
  return {
  }
}

export default connect(mapStateToProps)(App)
