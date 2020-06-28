import './ProjectView.css'
import React from 'react'
import ProjectSideBar from './ProjectSideBar/ProjectSideBar'
import HourLabels from './HourLabels/HourLabels'
import Timelines from './Timelines/Timelines'

const ProjectView = (props) => {

  const startTime = 900
  const endTime = 2300

  return(
    <div id="project-view">
      <ProjectSideBar project={props.project}/>
      <div id="project-view-content">
        <div id="planner">
          <HourLabels startTime={startTime} endTime={endTime} />
          <Timelines startTime={startTime} endTime={endTime} timelines={props.timelines}/>
        </div>
      </div>
    </div>
  )
}

export default ProjectView