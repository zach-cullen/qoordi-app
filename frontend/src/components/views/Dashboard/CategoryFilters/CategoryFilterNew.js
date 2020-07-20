import React from 'react'
import AddIcon from '@material-ui/icons/Add'

const CategoryFilterNew = (props) => {

  // callback function passed from DashboardContainer that displays new category form as popup
  const handleClick = () => {
    props.setActivePopup("new-category")
  }

  return(
    <div 
      className="category-filter" id="category-filter-new"
      onClick={handleClick}
    >
      <span className="category-filter-icon" style={{color: "gray"}}>
        <AddIcon fontSize="inherit" color="inherit"/>
      </span>
      <span className="category-filter-text">New Category</span>
      <span className="category-filter-options"></span>
    </div>
  )
}

export default CategoryFilterNew