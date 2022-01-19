/* 
	该文件用于汇总所有的reducer
*/
import { combineReducers } from "redux"
// Login的reducer
import login from './login'

export default combineReducers({
  login
})