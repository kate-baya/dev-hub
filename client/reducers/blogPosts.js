import { SET_POSTS } from '../actions'

const initialState = []

const blogPosts = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return action.blog

    default:
      return state
  }
}

export default blogPosts
