import request from 'superagent'

const rootUrl = 'http://localhost:3001/api/v1'

export function getPosts () {
  return request
  .get(rootUrl)
    .then(res => {
      return res.body
    })
}

export function saveBlog (blogPost) {
  return request
    .post(`${rootUrl}/addBlog`)
    .send(blogPost)
    .then(res => {
      return res.body
    })
}
