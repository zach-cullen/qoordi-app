import React from 'react'
import ToggleOnIcon from '@material-ui/icons/ToggleOn'

const CategoryFilter = (props) => {

  const handleClick = () => {
    props.toggleHideCategory(props.category.id)
  }

  return(
    <div className="category-filter">
      <span 
        className={`category-filter-icon option-font-${props.category.color}`}
        onClick={handleClick}
      >
        <ToggleOnIcon fontSize="inherit" color="inherit" />
      </span>
      <span className="category-filter-text">{props.category.title}</span>
      <span className="category-filter-options"></span>
    </div>
  )
}

export default CategoryFilter