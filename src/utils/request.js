import axios from "axios";

const service = axios.create({
  baseURL: '/api',
  timeout: 30 * 1000
})

service.interceptors.request.use(config => {

}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(res => {
  if (res.data.code === 1) {
    return res.data
  } else {
    return Promise.reject(res.data)
  }
}, error => {
  return Promise.reject(error)
})
