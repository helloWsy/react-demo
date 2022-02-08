import React, { Component } from 'react'
// import Navbar from './components/Navbar'
import Header from './Header'
import Content from './Content'
// import RouterMap from '../router'

class index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content/>
        {/* <Navbar /> */}
        {/* <RouterMap/> */}
      </div>
    )
  }
}
export default index