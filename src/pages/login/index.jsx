import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginIn } from '../../store/actions/user'
import { Form, Input, Button, Checkbox } from 'antd'
import { Redirect } from 'react-router-dom'
class Login extends Component {

  // login = () => {
  //   if (this.username.value && this.password.value) {
  //     this.props.LOGIN_IN(this.username.value, this.password.value)
  //   } else {
  //     alert('请输入账号密码')
  //   }
  // }
	
	onFinish = values => {
	  this.props.loginIn(values.username, values.password)
	}
	
	onFinishFailed = (errorInfo) => {
	  console.log('Failed:', errorInfo)
	};

	render() {
	  const { token } = this.props
	  if (!token) {
	    return (
	    //   <div>
	    // 	账号<input defaultValue={'test'} placeholder="请输入账号" ref={c => this.username = c} type="text" />
	    // 	密码<input defaultValue={'91b70cc9632ac5ac7b3fe2a63373aa65'} placeholder="请输入密码" ref={c => this.password = c} type="password" />
	    //     <button onClick={this.login}>登录</button>
	    //   </div>
	      <Form
	        autoComplete="off"
	        className="login-form"
	        initialValues={{ remember: true }}
	        labelCol={{ span: 8 }}
	        name="basic"
	        onFinish={this.onFinish}
	        onFinishFailed={this.onFinishFailed}
	        wrapperCol={{ span: 16 }}
	      >
	        <Form.Item
	          initialValue={'test'}
	          label="Username"
	          name="username"
	          rules={[{ required: true, message: 'Please input your username!' }]}
	        >
				
		  		<Input />
	        </Form.Item>
				
	        <Form.Item
	          initialValue={'91b70cc9632ac5ac7b3fe2a63373aa65'}
	          label="Password"
	          name="password"
	          rules={[{ required: true, message: 'Please input your password!' }]}
	        >
		  		<Input.Password />
	        </Form.Item>
				
	        <Form.Item
	          name="remember"
	          valuePropName="checked"
	          wrapperCol={{ offset: 8, span: 16 }}
	        >
		  		<Checkbox>Remember me</Checkbox>
	        </Form.Item>
	        
	        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
		  		<Button htmlType="submit" type="primary">Submit</Button>
	        </Form.Item>
	      </Form>
	    )
	  } 
	  return <Redirect to="home" />
	}
}
// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = (dispatch) => ({

// })

export default connect(
  state => ({
    token: state.token
  }),
  {
    loginIn
  }
)(Login)
// export default connect(mapStateToProps,mapDispatchToProps)(Login)
// export default Login