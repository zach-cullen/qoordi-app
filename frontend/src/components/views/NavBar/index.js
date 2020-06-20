import './NavBar.css'
import { ReactComponent as Logo } from '../../logo/qoordi-logo.svg'
import React from 'react'
import { connect} from 'react-redux'
import { NavLink } from 'react-router-dom'

const NavBar = ({ session }) => {

  const loggedIn = () => session.authenticated

  const loggedInNav = () => {
    return(
      <div className="navbar-links">
        <NavLink exact to="/app">Dashboard</NavLink>
        <NavLink exact to="/logout">Logout</NavLink>
      </div>
    )
  }

  const loggedOutNav = () => {
    return(
      <div className="navbar-links">
        <NavLink exact to="/login">Log in</NavLink>
        <NavLink exact to="/signup">Sign up</NavLink>
      </div>
    )
  }

  return(
    <nav id="navbar">
      <div className="navbar-grid width-container">
        <NavLink className="navbar-home" exact to="/"><Logo /></NavLink>
        { loggedIn() ?  loggedInNav() : loggedOutNav() }
      </div>
    </nav>
  )
}

export default connect(state => ({session: state.session}))(NavBar)