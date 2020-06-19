import './Dashboard.css'
import DashGreeting from './DashGreeting'
import SidebarLineBreak from '../decorators/SidebarLineBreak'
import React from 'react'

const Dashboard = (props) => {

  return(
    <div id="dashboard-grid">
      <div id="dashboard-tools">
        <DashGreeting currentUser={props.currentUser}/>
        <SidebarLineBreak />
      </div>
      <div id="dashboard-main">
      </div>
    </div>
  )
}

export default Dashboard