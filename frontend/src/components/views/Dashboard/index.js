import './Dashboard.css'
import React from 'react'
import DashSideBar from './DashSideBar/DashSideBar'
import ProjectTable from './ProjectTable/ProjectTable'
import NewProjectButton from './NewProjectButton'
import ProjectSearch from './ProjectSearch/ProjectSearch'


const Dashboard = (props) => {

  return(
    <div id="dashboard">
      <DashSideBar />
      <div id="dash-content">
          <div id="dash-content-tools">
            <ProjectSearch />
            <NewProjectButton />
          </div>
          <ProjectTable />
      </div>
    </div>
  )
}

export default Dashboard