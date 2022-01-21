import React, { Component } from 'react'
import{ loginOut } from '@/store/actions/user'
import { connect } from 'react-redux'
class User extends Component {
  
  out = () => {
    this.props.loginOut()
  }

  render() {
    return <button className="user" onClick={this.out}>退出登录</button>
  }
}

export default connect(null, { loginOut })(User)