import React, { Component } from 'react'
import { Redirect, withRouter, Route, Switch } from "react-router-dom"
import { connect } from 'react-redux'
import routeList from "@/config/routeMap"

// class Content extends Component {
	
//   render() {
//     return <div></div>
//   }
// }

const LayoutContent = props => {
  const { role, location } = props
  //   const { pathname } = location
  //   const handleFilter = (route) => {
  //     // 过滤没有权限的页面
  //     return role === "admin" || !route.roles || route.roles.includes(role)
  //   }
  return (
    <Switch location={location}>
      <Redirect exact from="/" to="/home" />
      {
        routeList.map(route => {
          return (
          // handleFilter
            <Route component={route.component} key={route.path} path={route.path} />
          )
        })
      }
    </Switch>
  )
}

export default connect()(LayoutContent)