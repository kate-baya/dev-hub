import { combineReducers } from 'redux'

import blog from './blogPosts'
import projects from './projects'
import user from './user'
import favorites from './favorites'

export default combineReducers({
  blog,
  projects,
  user,
  favorites
})
