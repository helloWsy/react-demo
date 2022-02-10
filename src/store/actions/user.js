import { LOGIN_IN, LOGIN_OUT, TOKEN } from '../action-types'
import { login, logout } from '@/api/user'
import history from '@/history'
// import { message } from 'antd'

// export const userInfo = data => ({ type: USERINFO, data })
export const loginIn = (username, password) => {
  return dispatch => {
    login({ username, password }).then(res => {
      if (res.message === 'success') {
        dispatch({ type: LOGIN_IN, data: res.user })
        dispatch({ type: TOKEN, data: res.token })
        history.push('/home')
      }
    }).catch(() => {
      // console.log(err)
    })
  }
}

export const loginOut = () => {
  return dispatch => {
    history.push('/login')
    logout().then((res) => {
      console.log(res)
      dispatch({ type: LOGIN_OUT, data: null })
      history.push('/login')
    })
  }
}