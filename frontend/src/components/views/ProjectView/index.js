import './ProjectView.css'
import React, { Component } from 'react'
import ProjectSideBar from './ProjectSideBar/ProjectSideBar'
import HourLabels from './HourLabels/HourLabels'
import Timelines from './Timelines/Timelines'

class ProjectView extends Component {

  constructor() {
    super()
    this.state = {
      sideBarBlockId: null,
      startTime: 900,
      endTime: 2300,
    }
  }

  setSideBarBlockId = (blockId) => {
    this.setState({
      sideBarBlockId: blockId,
    })
  }

  render() {
    return(
      <div id="project-view">
        <ProjectSideBar project={this.props.project} blockId={this.state.sideBarBlockId}/>
        <div id="project-view-content">
          <div id="planner">
            <HourLabels startTime={this.state.startTime} endTime={this.state.endTime} />
            <Timelines 
              startTime={this.state.startTime} 
              endTime={this.state.endTime} 
              timelines={this.props.timelines}
              setSideBarBlockId={this.setSideBarBlockId}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectView