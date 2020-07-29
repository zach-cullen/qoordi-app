import React from 'react'
import { withRouter } from 'react-router'
import ToggleOnIcon from '@material-ui/icons/ToggleOn'
import ToggleOffIcon from '@material-ui/icons/ToggleOff'

const CategoryFilterInRouter = (props) => {

  const handleClick = () => {
    props.toggleHideCategory(props.category.id)
  }

  const renderToggleIcon = () => {
    if (!props.categoryHidden) {
      return(
        <ToggleOnIcon fontSize="inherit" color="inherit" />
      )
    }

    if (props.categoryHidden) {
      return(
        <ToggleOffIcon fontSize="inherit" color="inherit" />
      )
    }
  } 

  const setIconColor = () => {
    return !props.categoryHidden ? props.category.color : "inactive"
  }

  return(
    <div className="category-filter">
      <span 
        className={`category-filter-icon option-font-${setIconColor()}`}
        onClick={handleClick}
      >
        {renderToggleIcon()}
      </span>
      <span className="category-filter-text">{props.category.title}</span>
      <span className="category-filter-options"></span>
    </div>
  )
}

const CategoryFilter = withRouter(CategoryFilterInRouter)

export default CategoryFilter