import React from 'react'
import MaterialIcon from 'material-icons-react'

const CategoryFilter = ({ category }) => {
  return(
    <div className="category-filter">
      <span className={`category-filter-icon option-font-${category.color}`}>
        <MaterialIcon icon="toggle_on" size={20} color="inherit" />
      </span>
      <span className="category-filter-text">{category.title}</span>
      <span className="category-filter-options"></span>
    </div>
  )
}

export default CategoryFilter