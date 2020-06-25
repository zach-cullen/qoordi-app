import './ProjectView.css'
import React from 'react'
import ProjectSideBar from './ProjectSideBar/ProjectSideBar'

const ProjectView = (props) => {

  return(
    <div id="project-view">
      <ProjectSideBar project={props.project}/>
      <div id="project-view-content">
      </div>
    </div>
  )
}

export default ProjectView