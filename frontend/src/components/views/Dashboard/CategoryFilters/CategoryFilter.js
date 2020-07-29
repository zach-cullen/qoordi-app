import React from 'react'
import { useHistory } from 'react-router'
import queryString from 'query-string'
import ToggleOnIcon from '@material-ui/icons/ToggleOn'
import ToggleOffIcon from '@material-ui/icons/ToggleOff'

const CategoryFilter = (props) => {

  // connect to history api using react-router hook
  const history = useHistory()
  // uses history location and query-string library to parse array of hidden categories from url query strings
  const params = queryString.parse(history.location.search)
  // add or remove hideCat param for prop category
  const toggleCategory = () => {
    // strip search from url params of initial ? and category filter if this category is included
    // not removing question mark would cause error in case of no search params
    let prevSearch = history.location.search.replace('?', '').replace(`&hideCat=${props.category.id}`, '')
    // push new search params removing this category if hidden or adding if not hidden
    props.categoryHidden ? history.push(`?${prevSearch}`) : history.push(`?${prevSearch}&hideCat=${props.category.id}`)
  }

  const handleClick = () => {
    toggleCategory()
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

export default CategoryFilter