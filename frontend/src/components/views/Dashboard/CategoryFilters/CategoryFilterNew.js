import React from 'react'
import AddIcon from '@material-ui/icons/Add'

const CategoryFilterNew = (props) => {

  const thisProps = props

  const handleClick = () => {
    thisProps.setActivePopup("new-category")
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