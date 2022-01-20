
import React, { Suspense, Component } from 'react'
import { connect } from 'react-redux'
import { Router, Switch, Redirect, Route, withRouter } from 'react-router-dom'
import history from './history'
 
import { getToken } from './utils/auth'

const routes = [
  {
    path: "/",
    exact: true,
    auth: true,
    component: () => {
      if (getToken()) {
        return <Redirect exact to="/home"></Redirect>
      }
      // return <Redirect exact to="/login"></Redirect>
    }
  },
  {
    path: "/login",
    component: React.lazy(() => import('./pages/login'))
  },
  {
    path: "/home",
    component: React.lazy(() => import('./pages/home'))
  },
  {
    path: '/404',
    component: React.lazy(() => import('./pages/404'))
  }
]

class FrontendAuthClass extends Component {
  render() {
    const { location: { pathname }, config } = this.props
    const targetRouter = config.find((v) => v.path === pathname)
    const isLogin = Boolean(getToken())
    
    if (!isLogin && pathname !== '/login') {
      return <Redirect to="/login" />
    }
    if (isLogin && pathname === '/login') {
      return <Redirect to="/home" />
    }
    if (!targetRouter) {
      return <Redirect to="/404" />
    } 
    const { component } = targetRouter
    return <Route component={component} exact path={pathname} />     
  }
}

const FrontendAuth = connect()(withRouter(FrontendAuthClass))

export default () => 
  <Router history={history}>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <FrontendAuth config={routes} />
      </Switch>
    </Suspense>
  </Router >

