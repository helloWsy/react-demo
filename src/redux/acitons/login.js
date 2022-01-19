import { LOGININ, LOGINOUT } from '../constant'
import { login } from '../../api/user'
// export const userInfo = data => ({ type: USERINFO, data })
export const loginIn = (username, password) => {
  console.log(username, password)
  return dispatch => {
    login({ username, password }).then(res => {
      console.log(res)
      // return {
      // 	type: LOGININ,
      // 	data:res
      // }

      const { token } = res

      dispatch(res => {
        return { type: LOGININ, res }
      })
      dispatch(res)
    })
  }

  // localStorage.removeItem('')
  // localStorage.setItem('username', account)

  // return {}
}

export const loginOut = data => ({ type: LOGINOUT, data })