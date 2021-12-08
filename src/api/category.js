import request from '../utils/request'

// /category/getAll GET
export function getAllCategory () {
  return request({
    url: '/category/getAll',
    method: 'GET'
  })
}
