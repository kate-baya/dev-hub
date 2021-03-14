import React from 'react'
import { connect } from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import NewPost from './NewPost'
import BlogPost from './BlogPost'
import VertNav from './VertNav'
import NewProject from './NewProject'
import Projects from './Projects'
import Project from './Project'
import NewProjectBlogPost from './NewProjectBlogPost'

function App () {
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
        <Route path='/newProject' component={NewProject} />
        <Route path='/projects' exact={true} component={Projects} />
        <Route path='/projects/:id' component={Project} />
        <Route path="/newProjectPost/:id" component={NewProjectBlogPost} />
        </div>
        </div>
      </div>
      </Router>
    )
}

export default connect()(App)
