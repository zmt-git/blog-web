import request from '../utils/request'

// /system/login POST
export function login (data) {
  return request({
    url: '/system/login',
    method: 'POST',
    data
  })
}

// /system/register POST
export function register (data) {
  return request({
    url: '/system/register',
    method: 'POST',
    data
  })
}

// logout
export function logout () {
  return request({
    url: '/system/logout',
    method: 'POST'
  })
}
