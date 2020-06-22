import './NavSide.css'
import { ReactComponent as Logo } from '../../logo/qoordi-logo.svg'
import React from 'react'
import { NavLink } from 'react-router-dom'
import MaterialIcon from 'material-icons-react'

const NavSide = () => {

  return(
    <nav id="nav-side">
      <NavLink className="nav-side-home" exact to="/"><Logo /></NavLink>
      <div className="nav-side-links">

        <NavLink className="nav-side-link" exact to="/app">
          <span className="nav-side-link-icon">
            <MaterialIcon icon="calendar_today" size={20} color="inherit"/>
          </span>
          <span className="nav-side-link-text">Dashboard</span>
        </NavLink>

        <NavLink className="nav-side-link" exact to="/logout">
          <span className="nav-side-link-icon">
            <MaterialIcon icon="exit_to_app" size={20} color="inherit"/>
          </span>
          <span className="nav-side-link-text">Log out</span>
        </NavLink>
        
      </div>
    </nav>
  )

}

export default NavSide