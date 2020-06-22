import './CategoryFilters.css'
import React from 'react'
import MaterialIcon from 'material-icons-react'

const CategoryFilters = () => {
  return(
    <div id="category-filters">
      <div className="category-filter-heading">
        <h5>Categories:</h5>
      </div>

      <div className="category-filter">
        <span className="category-filter-icon" style={{color: "#E774BF"}}><MaterialIcon icon="toggle_on" size={20} color="inherit" /></span>
        <span className="category-filter-text">Wedding</span>
        <span className="category-filter-options"></span>
      </div>

      <div className="category-filter">
        <span className="category-filter-icon" style={{color: "#FA945C"}}><MaterialIcon icon="toggle_on" size={20} color="inherit" /></span>
        <span className="category-filter-text">Corporate</span>
        <span className="category-filter-options"></span>
      </div>

      <div className="category-filter">
        <span className="category-filter-icon" style={{color: "gray"}}><MaterialIcon icon="toggle_off" size={20} color="inherit"/></span>
        <span className="category-filter-text">Music Video</span>
        <span className="category-filter-options"></span>
      </div>

      <div className="category-filter">
        <span className="category-filter-icon" style={{color: "gray"}}><MaterialIcon icon="add" size={20} color="inherit"/></span>
        <span className="category-filter-text">New Category</span>
        <span className="category-filter-options"></span>
      </div>
    </div>
  )
}

export default CategoryFilters