import './Dashboard.css'
import React from 'react'
import DashGreeting from './DashGreeting'
import ProjectTableTools from './ProjectTable/ProjectTableTools'
import ProjectTable from './ProjectTable/ProjectTable'


const Dashboard = (props) => {

  return(
    <div className="main-container" id="dashboard-grid">
      <div id="dashboard-tools">
        <DashGreeting currentUser={props.currentUser}/>
      </div>
      <div id="dashboard-main">
        <ProjectTableTools />
        <ProjectTable />
      </div>
    </div>
  )
}

export default Dashboard