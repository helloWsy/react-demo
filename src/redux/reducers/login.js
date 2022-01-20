import { fromJS } from 'immutable'
import { LOGINOUT, LOGININ, TOKEN } from '../constant'
import * as auth from '../../utils/auth'

const defaultState = fromJS({
  // userInfo: auth.getUserInfo(),
  // token: auth.getToken()
  userInfo: {},
  token: ''
})


export default function loginReducer(state = defaultState, { type, data }) {
  switch (type) {
    case LOGININ:
      auth.setUserInfo(data)
      return state.set('userInfo', data)
    case LOGINOUT:
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