import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginOut } from '../../../store/actions/user'
// import { loginOut } from '../../store/actions/user'

class Narbar extends Component {
	loginOut = () => {
	  this.props.loginOut()
	}

	render() {
	  return <button onClick={this.loginOut}>退出登录</button>
	}
 
}
export default connect(
  state => ({
    userInfo: state.userInfo
  }),
  {
    loginOut
  }
)(Narbar)