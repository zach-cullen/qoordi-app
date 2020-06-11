import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return(
    <nav>
      <NavLink exact to="/home">Home </NavLink>
      <NavLink exact to="/app">Dash </NavLink>
      <NavLink exact to="/login">Login </NavLink>
      <NavLink exact to="/signup">Signup </NavLink>
    </nav>
  )
}

export default NavBar