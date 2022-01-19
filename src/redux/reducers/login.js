import { LOGINOUT, LOGININ } from '../constant'

export default function loginReducer(preState = null, { type, data }) {
  switch (type) {
    case LOGININ:
      return data
    case LOGINOUT: //退出登录
      return {}
    default:
      return preState
  }
}