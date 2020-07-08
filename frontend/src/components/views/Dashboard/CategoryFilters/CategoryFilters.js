import './CategoryFilters.css'
import React from 'react'
import CategoryFilter from './CategoryFilter'
import CategoryFilterNew from './CategoryFilterNew'

const CategoryFilters = (props) => {

  const renderCategoryFilters = () => {
    return props.categories.allIds.map((id) => {
      const category = props.categories.byId[id]
      const categoryIsHidden = props.hiddenCategoryIds.includes(id)

      return (
        <CategoryFilter 
          key={id} 
          category={category} 
          toggleHideCategory={props.toggleHideCategory}
          categoryHidden={categoryIsHidden}
        />
      )
    })
  }


  return(
    <div id="category-filters">
      <div className="category-filter-heading">
        <h5>Categories:</h5>
      </div>

      {renderCategoryFilters()}

      <CategoryFilterNew 
        setActivePopup={props.setActivePopup}
      />
    </div>
  )
}

export default CategoryFilters