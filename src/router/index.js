import React, { Component } from "react"
import { Router, Route, Switch, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { getToken } from '@/utils/auth'
import history from '@/history'
import Layout from "@/layout"
import Login from "@/pages/login"

class MyRouter extends Component {
  render() {
    // const { token, role } = this.props
    const token = getToken()
    return (
      <Router history={history}>
        <Switch>
          {/* <Route exact path="/login" /> */}
          <Route component={Login} exact path="/login" />
          <Route
            path="/"
            render={() => {
              if (!token) {
                return <Redirect to="/login" />
              }
              
              return <Layout />
              // if (role) {
              //   return <Layout />
              // } 
              // getUserInfo(token).then(() => <Layout />)
              // return <Layout />
            }}
          />
        </Switch>
      </Router>
    )
  }
}

export default connect(state => state)(MyRouter)
// export default connect((state) => state.user, { getUserInfo })(Router)
