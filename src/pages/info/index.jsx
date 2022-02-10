import React, { Component } from 'react'
import { connect } from 'react-redux'
import { list } from '@/api/user'

// let userList = []
class Info extends Component {

	state = {
	  userList: []
	}

	listUser = () => {
	  list().then(res => {
		  console.log(res)
	    //   this.userList = res
		  this.setState({
			  userList: res
		  })
	  })
	}

	render() {
	  const { userList } = this.state
	  console.log(this.state)
	  console.log(userList)
	  return (
	    <div>
	      <button onClick={this.listUser}>listUsers</button>
	      <div>
	        {
	          userList.map(user => {
	            return <div key={user._id} >{JSON.stringify(user)}</div>
	          })
	        }
	      </div>
	    </div>	
	  )
	}
}

export default connect(null, { })(Info)