import './DashSideBar.css'
import React from 'react'
import NavSide from '../../NavSide'
import CategoryFilters from '../CategoryFilters/CategoryFilters'

const DashSideBar = (props) => {

  return(
    <div id="dash-sidebar">
      <div id="dash-sidebar-container">
        <NavSide />
        <div className="line-spacer-3"></div>
        <div id="project-filters">
          <CategoryFilters 
            categories={props.categories}
            setActivePopup={props.setActivePopup}
            hiddenCategoryIds={props.hiddenCategoryIds}
          />
        </div>
      </div>
    </div>
  )

}

export default DashSideBar