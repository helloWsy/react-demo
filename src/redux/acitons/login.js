import { LOGININ, LOGINOUT, TOKEN } from '../constant'
import { login } from '../../api/user'
import { Redirect } from 'react-router-dom'

// export const userInfo = data => ({ type: USERINFO, data })
export const loginIn = (username, password) => {
  return dispatch => {
    login({ username, password }).then(res => {
      if (res.code === 200) {
        dispatch({ type: LOGININ, data: res.data.principal })
        dispatch({ type: TOKEN, data: res.data.token })
        // <Redirect to="/home" />
      }
    })
  }
}

export const loginOut = () => {
  return dispatch => {
    dispatch({ type: LOGINOUT, data: null })
  }
}