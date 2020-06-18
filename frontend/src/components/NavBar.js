import React from 'react'
import { connect} from 'react-redux'
import { NavLink } from 'react-router-dom'

const NavBar = ({ session }) => {

  const loggedIn = () => session.authenticated

  const loggedInNav = () => {
    return(
      <div id="main-nav-links">
        <NavLink exact to="/app">Dash </NavLink>
        <NavLink exact to="/logout">Logout </NavLink>
      </div>
    )
  }

  const loggedOutNav = () => {
    return(
      <div id="main-nav-links">
        <NavLink exact to="/login">Login </NavLink>
        <NavLink exact to="/signup">Signup </NavLink>
      </div>
    )
  }

  return(
    <div className="main-container">
      <nav id="main-nav">
        <NavLink className="main-nav-home" exact to="/home">Home </NavLink>
        { loggedIn() ?  loggedInNav() : loggedOutNav() }
      </nav>
    </div>
  )
}

export default connect(state => ({session: state.session}))(NavBar)