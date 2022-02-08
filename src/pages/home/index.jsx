import React, { Component } from 'react'
import { connect } from 'react-redux'
import map from '@/utils/map'
class Home extends Component {
  
  componentDidMount() {
    map.createMap('homeMap')
  }

  render() {
    return <div id="homeMap" />
  }
}

export default connect(
  state => ({
    userInfo: state.userInfo
  }),
)(Home)