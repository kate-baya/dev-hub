import request from 'superagent'

const rootUrl = 'http://localhost:3001/api/v1'

export function getPosts () {
  return request
    .get(rootUrl)
    .then(res => {
      return res.body
    })
}

export function getProjectPosts (id) {
  return request
    .get(`${rootUrl}/${id}`)
    .then(res => res.body)
}

export function saveBlog (blogPost, userId, userName) {
  console.log(userId, userName, blogPost)
  return request
    .post(`${rootUrl}/addBlog`)
    .send({ blogPost, userId, userName })
    .then(res => {
      return res.body
    })
}
