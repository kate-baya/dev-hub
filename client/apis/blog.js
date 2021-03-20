import request from 'superagent'

const rootUrl = 'http://localhost:3001/api/v1'

export function getPosts () {
  return request
  .get(rootUrl)
    .then(res => {
      return res.body
    })
}

export function saveBlog (blogPost, user_id) {
  console.log(user_id, blogPost)
  return request
    .post(`${rootUrl}/addBlog`)
    .send({blogPost, user_id})
    .then(res => {
      console.log(res.body)
      return res.body
    })
}
