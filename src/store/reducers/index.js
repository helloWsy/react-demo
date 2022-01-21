/* 
	该文件用于汇总所有的reducer
*/
import { combineReducers } from "redux"
// Login的reducer
import user from './user'

export default combineReducers({
  user
})