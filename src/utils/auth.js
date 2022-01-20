import Cookies from 'js-cookie'

const TokenKey = 'react_demo'

export function getToken() {
  return Cookies.get(TokenKey) ? Cookies.get(TokenKey) : undefined
}

export function setToken(token) {
  return Cookies.set(TokenKey, token, { expires: 30 * 60 * 1000 })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

const userKey = 'react_demo_userinfo'

export function getUserInfo() {
  return Cookies.get(userKey) ? JSON.parse(Cookies.get(userKey)) : undefined
}

export function setUserInfo(info) {
  return Cookies.set(userKey, JSON.stringify(info), { expires: 30 * 60 * 1000 })
}

export function removeUserInfo() {
  return Cookies.remove(userKey)
}
