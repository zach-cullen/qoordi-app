import './NavSide.css'
import React from 'react'
import NavSideHome from './NavSideHome'
import NavSideLinks from './NavSideLinks'

const NavSide = () => {

  return(
    <nav id="nav-side">
      <NavSideHome />
      <NavSideLinks />
    </nav>
  )

}

export default NavSide