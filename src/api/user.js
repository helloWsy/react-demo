import request from '../utils/request'

export function login(data) {
  return request({
    url: '/api/authentication/login',
    method: 'post',
    data
  })
}