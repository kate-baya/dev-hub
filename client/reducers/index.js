import { combineReducers } from 'redux'

import fruits from './fruits'
import blog from'./blogPosts'

export default combineReducers({
  fruits,
  blog
})
