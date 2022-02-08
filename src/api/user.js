import request from '../utils/request'

// 登录
export function login(data) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data
  })
}

// 登出
export function logout() {
  return request({
    url: '/api/user/logout',
    method: 'get'
  })
}

// 列表
export function list() {
  return request({
    url: '/api/user/list',
    method: 'get'
  })
}