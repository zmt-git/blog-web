import axios from "axios";
import message from '../components/Message/msg'
import {getToken} from "./auth";
import eventBus from "./eventBus";
const service = axios.create({
  baseURL: 'http://192.168.2.235:8081',
  timeout: 30 * 1000
})

service.interceptors.request.use(config => {
  if (getToken()) {
    config.headers['authorization'] = `Bearer ${getToken()}`
  }

  config.headers['Content-Type'] = 'application/json'
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(res => {
  eventBus.emit('showLogin', false)

  if (res.data.code === 1) {
    return res.data
  } else {
    message.error({ message: res.data.msg })
    return Promise.reject(res.data)
  }
}, error => {
  try {
    if (error.response.status === 401) {
      eventBus.emit('showLogin', true)
    } else {
      const  msg = error.response.data.msg ? error.response.data.msg : '系统异常'
      message.error({ message: msg });
      eventBus.emit('showLogin', false)
    }
  } catch (e) {
    message.error({ message: '系统异常' })
  }

  return Promise.reject(error)
})

export default service
