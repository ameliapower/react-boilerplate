import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <NavLink className="" to="/" exact activeClassName="active">
          home
        </NavLink>
        <NavLink className="" to="/about" activeClassName="active">
          about
        </NavLink>
      </div>
    )
  }
}

export default Nav
