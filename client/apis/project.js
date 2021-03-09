import request from 'superagent'

const rootUrl = 'http://localhost:3000/api/v1'

export function createNewProject (project) {
  return request
  .post(`${rootUrl}/newProject`)
  .send(project)
  .then(res => {
    return res.body
  })
}