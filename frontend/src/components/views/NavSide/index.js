import './NavSide.css'
import { ReactComponent as Logo } from '../../logo/qoordi-logo.svg'
import React from 'react'
// import { connect} from 'react-redux'
// import { NavLink } from 'react-router-dom'

const NavSide = () => {

  return(
    <nav id="nav-side">
      <Logo />
      <div>
        Nav
      </div>
    </nav>
  )

}

export default NavSide