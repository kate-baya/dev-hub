import React from 'react'
import { connect } from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import NewPost from './NewPost'
import BlogPost from './BlogPost'
import VertNav from './VertNav'

function App (props) {
    return (
      <Router>
      <div className='app'>

        <VertNav />
       
        <div className="mainModule">
        <Nav />
        <div className='home'>
        <Route path='/' exact={true} component={Home} />
        <Route path="/newPost" component={NewPost} />
        <Route path="/blogPost/:id" component={BlogPost} />
        </div>
        </div>
      </div>
      </Router>
    )
}

export default connect()(App)
