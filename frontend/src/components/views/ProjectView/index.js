import './ProjectView.css'
import React from 'react'
import ProjectSideBar from './ProjectSideBar/ProjectSideBar'

const ProjectView = (props) => {

  return(
    <div id="project-view">
      <ProjectSideBar project={props.project}/>
      <div id="project-view-content">
        <div id="planner">
          <div id="hr-labels">
          </div>
          <div id="timelines">
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectView