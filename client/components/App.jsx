import React from 'react'
import { connect } from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'

import { fetchFruits } from '../actions'

import Home from './Home'
import Nav from './Nav'
import NewPost from './NewPost'
import BlogPost from './BlogPost'

function App (props) {
    return (
      <Router>
      <div className='app'>
        <Nav />
        <Route path='/' exact={true} component={Home} />
        <Route path="/newPost" component={NewPost} />
        {/* <Route path="/blogPost/:id" component={() => <BlogPost />} /> */}
        <Route path="/blogPost/:id" component={BlogPost} />
      </div>
      </Router>
    )
}

function mapStateToProps (globalState) {
  console.log("app state", globalState)
  return {
    blog: globalState.blog
  }
}

export default connect(mapStateToProps)(App)
