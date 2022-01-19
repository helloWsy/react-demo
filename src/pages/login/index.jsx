import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginIn, loginOut } from '../../redux/acitons/login'
class Login extends Component {

	login = () => {
	  if (this.username.value && this.password.value) {
	    this.props.loginIn(this.username.value, this.password.value)
	  } else {
	    alert('请输入账号密码')
	  }
	}

	render() {
	  const { userInfo } = this.props
	  if (!userInfo) {
	    return (
	      <div>
			账号<input defaultValue={'test'} placeholder="请输入账号" ref={c => this.username = c} type="text" />
			密码<input defaultValue={'91b70cc9632ac5ac7b3fe2a63373aa65'} placeholder="请输入密码" ref={c => this.password = c} type="password" />
	        <button onClick={this.login}>登录</button>
	      </div>
	    )
	  } 
	  // return <Redirect  to="home" />

	}
}
// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = (dispatch) => ({

// })

export default connect(
  state => ({
    userInfo: state.userInfo
  }),
  {
    loginIn,
    loginOut
  }
)(Login)
// export default connect(mapStateToProps,mapDispatchToProps)(Login)
// export default Login