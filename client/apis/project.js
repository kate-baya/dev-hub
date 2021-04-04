import request from 'superagent'

const rootUrl = 'http://localhost:3001/api/v1'

export function getProjects () {
  return request
    .get(`${rootUrl}/project/projects`)
    .then(res => {
      return res.body
    })
}

export function createNewProject (project, userId, userName) {
  return request
    .post(`${rootUrl}/newProject`)
    .send({ project, userId, userName })
    .then(res => {
      return res.body
    })
}

export function getProject (id) {
  return request
    .get(`${rootUrl}/project/${id}`)
    .then(res => {
      return res.body
    })
}

export function getUserProjects (userId) {
  return request
    .get(`${rootUrl}/projects/${userId}`)
    .then(res => res.body)
}

export function saveFavorite (userId, projectId, title) {
  return request
    .post(`${rootUrl}/favorite/${userId}/${projectId}/${title}`)
    .send({ userId, projectId, title })
    .then(res => {
      return res.body
    })
}

export function getFavorites (id) {
  return request
    .get(`${rootUrl}/favorite/${id}`)
    .then(res => res.body)
}
