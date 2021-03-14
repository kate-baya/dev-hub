
export const SET_POSTS = 'SET_POSTS'
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