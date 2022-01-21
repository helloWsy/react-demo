import { fromJS } from 'immutable'
import { LOGIN_OUT, LOGIN_IN, TOKEN } from '../action-types'
import * as auth from '@/utils/auth'

const defaultState = fromJS({
  userInfo: auth.getUserInfo(),
  token: auth.getToken()
  // userInfo: {},
  // token: ''
})

export default function user(state = defaultState, { type, data }) {
  switch (type) {
    case LOGIN_IN:
      auth.setUserInfo(data)
      return state.set('userInfo', data)
    case LOGIN_OUT:
      auth.removeToken() 
      auth.removeUserInfo()
      state.set('token', '')
      return state.set('userInfo', {})
    case TOKEN:
      auth.setToken(data)
      return state.set('token', data)
    default:
      return state
  }
}