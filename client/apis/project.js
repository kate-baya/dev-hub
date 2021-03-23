import request from 'superagent'

const rootUrl = 'http://localhost:3001/api/v1'

export function createNewProject (project, user_id) {
  return request
  .post(`${rootUrl}/newProject`)
  .send({project, user_id})
  .then(res => {
    return res.body
  })
}

export function getProjects() {
  return request
  .get(`${rootUrl}/projects`)
    .then(res => res.body)
}

export function getProject(id) {
  return request
  .get(`${rootUrl}/project/${id}`)
    .then(res => {
      return res.body
    })
}

export function getUserProjects(userId) {
  return request
  .get(`${rootUrl}/projects/${userId}`)
  .then(res => res.body)
}

export function saveFavorite(user_id, project_id, title) {
  return request
  .post(`${rootUrl}/favorite/${user_id}/${project_id}/${title}`)
  .send({user_id, project_id, title})
  .then(res => {
    return res.body
  })
}

export function getFavorites(id) {
  return request
  .get(`${rootUrl}/favorite/${id}`)
  .then(res => res.body)
}