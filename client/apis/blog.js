import request from 'superagent'

const rootUrl = '/api/v1/'

export function getPosts () {
  return request(rootUrl)
    .then(res => {
      return res.body
    })
}