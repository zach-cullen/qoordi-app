import './Dashboard.css'
import React from 'react'
import DashSideBar from './DashSideBar/DashSideBar'


const Dashboard = (props) => {

  return(
    <div id="dashboard">
      <DashSideBar />
      <div id="dash-content">
          CONTENT
      </div>
    </div>
  )
}

export default Dashboard