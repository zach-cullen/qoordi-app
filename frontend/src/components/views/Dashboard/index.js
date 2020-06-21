import './Dashboard.css'
import React from 'react'


const Dashboard = (props) => {

  return(
    <div id="dashboard">
      <div id="left-space"></div>
      <div id="dash-main">
        <div id="dash-sidebar">
          SIDEBAR
        </div>
        <div id="dash-content">
          CONTENT
        </div>
      </div>
      <div id="right-space"></div>
    </div>
  )
}

export default Dashboard