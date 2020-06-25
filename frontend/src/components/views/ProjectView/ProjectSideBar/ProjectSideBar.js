import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../../logo/qoordi-logo.svg'

const ProjectSideBar = () => {

  return (
    <div id="project-view-sidebar">
      <div id="project-view-sidebar-container">
        <NavLink className="nav-side-home" exact to="/"><Logo /></NavLink>
      </div>
    </div>
  )

}

export default ProjectSideBar

