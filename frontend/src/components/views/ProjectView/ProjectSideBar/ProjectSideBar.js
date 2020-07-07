import React from 'react'
import NavSideHome from '../../NavSide/NavSideHome'
import NavSideLinks from '../../NavSide/NavSideLinks'
import TimeBlockInfo from './TimeBlockInfo'

const ProjectSideBar = (props) => {
  return (
    <div id="project-view-sidebar">
      <div id="project-view-sidebar-container">
        <NavSideHome />
        <NavSideLinks />
        <div className="line-spacer-3"></div>
        <TimeBlockInfo 
          blockId={props.blockId}
          project={props.project}
          setSideBarBlockId={props.setSideBarBlockId}
        />
      </div>
    </div>
  )

}

export default ProjectSideBar

