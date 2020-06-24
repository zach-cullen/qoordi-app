import './CategorySelector.css'
import React from 'react'

const CategorySelector = (props) => {

  const handleCategoryClick = (event) => {
    const categoryId = event.target.getAttribute("data-value")
    props.setCategory(categoryId)
  }

  const renderOptions = () => {
    if (props.showCategoryOptions) {
      return(
        <div className="category-selector-options">
          { props.categories.map((category) => {
            return(
              <div key={category.id} className="category-option" data-value={category.id} onClick={handleCategoryClick}>
                <span className={`category-option-spot option-bg-${category.color}`}></span>{category.title}<span></span>
              </div>
            )
          }) }
        </div>
      )
    }
  } 

  return(
    <div className="category-selector">

      <div className="selected-category-option" onClick={props.openCategoryOptions}>
        <span className={`category-option-spot option-bg-${props.selectedCategory.color}`}></span>{props.selectedCategory.title}<span></span>
      </div>

      { renderOptions() }
    </div>
  )
}

export default CategorySelector