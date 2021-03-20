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

export function getUserProjects(userId) {
  return request
  .get(`${rootUrl}/projects/${userId}`)
  .then(res => res.body)
}