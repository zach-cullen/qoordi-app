import React from 'react'
import { connect} from 'react-redux'
import { NavLink } from 'react-router-dom'

const NavBar = ({ session }) => {

  const loggedIn = () => session.authenticated

  const loggedInNav = () => {
    return(
      <nav id="main-nav">
        <NavLink exact to="/home">Home </NavLink>
        <NavLink exact to="/app">Dash </NavLink>
        <NavLink exact to="/logout">Logout </NavLink>
      </nav>
    )
  }

  const loggedOutNav = () => {
    return(
      <nav id="app-nav">
        <NavLink exact to="/home">Home </NavLink>
        <NavLink exact to="/login">Login </NavLink>
        <NavLink exact to="/signup">Signup </NavLink>
      </nav>
    )
  }

  return loggedIn() ? loggedInNav() : loggedOutNav()
}

export default connect(state => ({session: state.session}))(NavBar)