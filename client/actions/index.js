export const SET_POSTS = 'SET_POSTS'
export const SET_USER = 'SET_USER'
export const SET_FAVORITES = 'SET_FAVORITES'
export const SET_PROJECTS = 'SET_PROJECTS'

export function setPosts (blog) {
  return {
    type: SET_POSTS,
    blog
  }
}

export function setProjects (projects) {
  return {
    type: SET_PROJECTS,
    projects: projects
  }
}

export function setUser(user) {
  return {
    type: SET_USER,
    user
  }
}

export function fetchUser(user) {
  return dispatch => {
    dispatch(setUser(user))
    return null
  }
}

export function setFavorites(favorites) {
  return {
    type: SET_FAVORITES,
    favorites: favorites
  }
}