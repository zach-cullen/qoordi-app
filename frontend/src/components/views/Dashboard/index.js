import './Dashboard.css'
import React from 'react'
import DashSideBar from './DashSideBar/DashSideBar'


const Dashboard = (props) => {

  return(
    <div id="dashboard">
      <div id="dash-left-space"></div>
      <div id="dash-main">
        <DashSideBar />
        <div id="dash-content">
          CONTENT
        </div>
      </div>
      <div id="dash-right-space"></div>
    </div>
  )
}

export default Dashboard