import request from 'superagent'

const rootUrl = 'http://localhost:3001/api/v1'

export function createNewProject (project) {
  return request
  .post(`${rootUrl}/newProject`)
  .send(project)
  .then(res => {
    console.log(res)
    return res.body
  })
}

export function getProjects() {
  return request
  .get(`${rootUrl}/projects`)
    .then(res => res.body)
}