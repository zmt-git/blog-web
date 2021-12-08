import request from '../utils/request'

// /user/getAll GET
export function getAllUser () {
  return request({
    url: '/user/getAll',
    method: 'GET'
  })
}
