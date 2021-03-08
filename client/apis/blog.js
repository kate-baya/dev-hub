import request from 'superagent'

const rootUrl = 'http://localhost:3000/api/v1'

export function getPosts () {
  return request
  .get(rootUrl)
    .then(res => {
      return res.body
    })
}

export function saveBlog (blogPost) {
  console.log(blogPost)
  return request
    .post(`${rootUrl}/addBlog`)
    .send(blogPost)
    .then(res => {
      return res.body
    })
}
