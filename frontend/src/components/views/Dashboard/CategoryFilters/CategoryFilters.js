import './CategoryFilters.css'
import React from 'react'
import MaterialIcon from 'material-icons-react'
import CategoryFilter from './CategoryFilter'

const CategoryFilters = (props) => {

  const renderCategoryFilters = () => {
    return props.categories.allIds.map((id) => {
      let category = props.categories.byId[id]
      return (
        <CategoryFilter key={id} category={category} />
      )
    })
  }


  return(
    <div id="category-filters">
      <div className="category-filter-heading">
        <h5>Categories:</h5>
      </div>

      {renderCategoryFilters()}

      <div className="category-filter">
        <span className="category-filter-icon" style={{color: "gray"}}><MaterialIcon icon="add" size={20} color="inherit"/></span>
        <span className="category-filter-text">New Category</span>
        <span className="category-filter-options"></span>
      </div>
    </div>
  )
}

export default CategoryFilters