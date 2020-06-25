import './NavSide.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../logo/qoordi-logo.svg'

const NavSideHome = () => {
  return(
    <NavLink className="nav-side-home" exact to="/"><Logo /></NavLink>
  )
}

export default NavSideHome