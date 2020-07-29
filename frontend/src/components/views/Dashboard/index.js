import './Dashboard.css'
import React from 'react'
import DashSideBar from './DashSideBar/DashSideBar'
import ProjectTable from './ProjectTable/ProjectTable'
import NewProjectButton from './NewProjectButton'
import ProjectSearch from './ProjectSearch/ProjectSearch'


const Dashboard = (props) => {

  return(
    <div id="dashboard">
      <DashSideBar 
        categories={props.categories}
        setActivePopup={props.setActivePopup}
        hiddenCategoryIds={props.hiddenCategoryIds}
      />
      <div id="dash-content">
          <div id="dash-content-tools">
            <ProjectSearch />
            <NewProjectButton 
              setActivePopup={props.setActivePopup}
            />
          </div>
          <ProjectTable
             projects={props.projects} 
             categories={props.categories}/>
      </div>
    </div>
  )
}

export default Dashboard