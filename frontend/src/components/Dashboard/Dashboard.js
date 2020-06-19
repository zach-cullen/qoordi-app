import './Dashboard.css'
import React from 'react'
import DashGreeting from './DashGreeting'
import SidebarLineBreak from '../decorators/SidebarLineBreak'
import ProjectBoardTools from '../ProjectBoard/ProjectBoardTools'
import ProjectBoard from '../ProjectBoard/ProjectBoard'


const Dashboard = (props) => {

  return(
    <div id="dashboard-grid">
      <div id="dashboard-tools">
        <DashGreeting currentUser={props.currentUser}/>
        <SidebarLineBreak />
      </div>
      <div id="dashboard-main">
        <ProjectBoardTools />
        <ProjectBoard />
      </div>
    </div>
  )
}

export default Dashboard