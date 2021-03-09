import { getFruits } from '../apis/fruits'

export const SET_FRUITS = 'SET_FRUITS'
export const SET_POSTS = 'SET_POSTS'
export const SET_PROJECTS = 'SET_PROJECTS'

export function setFruits (fruits) {
  return {
    type: SET_FRUITS,
    fruits
  }
}

export function fetchFruits () {
  return dispatch => {
    return getFruits()
      .then(fruits => {
        dispatch(setFruits(fruits))
        return null
      })
  }
}

export function setPosts (blog) {
  return {
    type: SET_POSTS,
    blog
  }
}

export function setProjects (projects) {
  return {
    type: SET_PROJECTS,
    projects
  }
}