import { combineReducers } from 'redux'

import blog from'./blogPosts'
import projects from './projects'

export default combineReducers({
  blog,
  projects
})
