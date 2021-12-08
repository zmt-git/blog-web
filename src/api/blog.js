import request from '../utils/request'

// /blog/page GET
export function pageBlog (params) {
  return request({
    url: '/blog/page',
    method: 'GET',
    params
  })
}

// /blog/getInfo GET
export function getInfoBlog (params) {
  return request({
    url: '/blog/getInfo',
    method: 'GET',
    params
  })
}

// /blog/del DELETE
export function delBlog (params) {
  return request({
    url: '/blog/del',
    method: 'DELETE',
    params
  })
}

// /blog/like POST
export function likeBlog (params) {
  return request({
    url: '/blog/like',
    method: 'POST',
    params
  })
}

// /blog/create POST
export function createBlog (data) {
  return request({
    url: '/blog/create',
    method: 'POST',
    data
  })
}

// /blog/update POST
export function updateBlog (data) {
  return request({
    url: '/blog/update',
    method: 'POST',
    data
  })
}

// /blog/read POST
export function readBlog (params) {
  return request({
    url: '/blog/read',
    method: 'POST',
    params
  })
}
