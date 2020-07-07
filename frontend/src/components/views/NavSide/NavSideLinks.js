import './NavSide.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

const NavSideLinks = () => {
  return(
    <div className="nav-side-links">
      <NavLink className="nav-side-link" exact to="/app">
        <span className="nav-side-link-icon">
          <CalendarTodayIcon fontSize="inherit" color="inherit" />
        </span>
        <span className="nav-side-link-text">Dashboard</span>
      </NavLink>

      <NavLink className="nav-side-link" exact to="/logout">
        <span className="nav-side-link-icon">
          <ExitToAppIcon fontSize="inherit" color="inherit" />
        </span>
        <span className="nav-side-link-text">Log out</span>
      </NavLink>
    </div>
  )
}

export default NavSideLinks