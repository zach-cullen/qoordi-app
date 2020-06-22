import './NavSide.css'
import { ReactComponent as Logo } from '../../logo/qoordi-logo.svg'
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavSide = () => {

  return(
    <nav id="nav-side">
      <NavLink className="nav-side-home" exact to="/"><Logo /></NavLink>
      <div className="nav-side-links">
        <NavLink className="nav-side-link" exact to="/app">
          Dashboard
        </NavLink>
        <NavLink className="nav-side-link" exact to="/logout">
          Log out
        </NavLink>
      </div>
    </nav>
  )

}

export default NavSide