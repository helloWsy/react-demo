import axios from 'axios'
import { message } from 'antd'
import { removeToken, removeUserInfo } from './auth'
import history from '../history'

const defaultContentType = 'application/octet-stream;charset=utf-8'

const service = axios.create({
  baseURL: process.env.REACT_APP_URL, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

service.interceptors.request.use(
  config => {
    //   if (store.getters.token) {
    // 	if(getToken()) {
    // 	  config.headers['token'] = getToken()
    // 	}
    //   }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if(response.headers['content-type'] === defaultContentType) {
      return response
    }

    if(response.data.status === 500 || response.data.code === 500) {
      message.error(res.msg)
      return Promise.reject(new Error(res.msg || 'Error'))
    }

    return res
  },
  error => {
    if (error.response.status === 403) {
      removeToken()
      removeUserInfo()
      history.replace('/login')
      return
    }
    return Promise.reject(error)
  }
)

export default service