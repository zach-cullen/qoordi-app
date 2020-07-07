import React from 'react'
import ToggleOnIcon from '@material-ui/icons/ToggleOn'

const CategoryFilter = ({ category }) => {
  return(
    <div className="category-filter">
      <span className={`category-filter-icon option-font-${category.color}`}>
        <ToggleOnIcon fontSize="inherit" color="inherit" />
      </span>
      <span className="category-filter-text">{category.title}</span>
      <span className="category-filter-options"></span>
    </div>
  )
}

export default CategoryFilter