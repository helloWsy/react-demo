import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginOut } from '../../redux/acitons/login'

class Home extends Component {

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
)(Home)