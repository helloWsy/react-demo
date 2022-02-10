import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import User from './components/User'
import './index.scss'

const linkList = [
  { to: "/home", name: 'Home' },
  { to: "/info", name: 'info' },
  { to: "/404", name: '404' }
]

class Header extends Component {
  render() {
    return (
      <div className="header">
        {
          linkList.map(link => {
            return <Link key={link.name} to={link.to} >{link.name}</Link>
          })
        }
        <User />
      </div>  
	  ) 
  }
}
export default connect()(Header)