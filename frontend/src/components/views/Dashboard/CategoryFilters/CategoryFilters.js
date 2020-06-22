import './CategoryFilters.css'
import React from 'react'

const CategoryFilters = () => {
  return(
    <div id="category-filters">
      <div className="category-filter-heading">
        <h5>Categories:</h5>
      </div>

      <div className="category-filter">
        <span className="category-filter-toggle"></span>
        <span className="category-filter-text">Wedding</span>
        <span className="category-filter-options"></span>
      </div>

      <div className="category-filter">
        <span className="category-filter-toggle"></span>
        <span className="category-filter-text">Corporate</span>
        <span className="category-filter-options"></span>
      </div>

      <div className="category-filter">
        <span className="category-filter-toggle"></span>
        <span className="category-filter-text">Music Video</span>
        <span className="category-filter-options"></span>
      </div>

      <div className="category-filter">
        <span className="category-filter-toggle"></span>
        <span className="category-filter-text">New Category</span>
        <span className="category-filter-options"></span>
      </div>
    </div>
  )
}

export default CategoryFilters