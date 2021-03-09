import { combineReducers } from 'redux'

import fruits from './fruits'
import blog from'./blogPosts'
import projects from './projects'

export default combineReducers({
  fruits,
  blog,
  projects
})
