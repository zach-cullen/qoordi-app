import React from 'react'
import NavSideHome from '../../NavSide/NavSideHome'

const ProjectSideBar = (props) => {

  return (
    <div id="project-view-sidebar">
      <div id="project-view-sidebar-container">
        <NavSideHome />
        <div className="spacer-2" />
        <div id="project-info">
          <h6>PROJECT</h6>
          <h4>{props.project.title}</h4>
        </div>
        <div className="line-spacer-4"></div>
      </div>
    </div>
  )

}

export default ProjectSideBar

