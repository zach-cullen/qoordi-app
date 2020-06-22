import './Dashboard.css'
import React from 'react'
import DashSideBar from './DashSideBar/DashSideBar'
import ProjectTable from './ProjectTable/ProjectTable'


const Dashboard = (props) => {

  return(
    <div id="dashboard">
      <DashSideBar />
      <div id="dash-content">
          <div id="dash-content-tools">

          </div>
          <ProjectTable />
      </div>
    </div>
  )
}

export default Dashboard