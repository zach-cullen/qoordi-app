import React from 'react'

const ProjectTableRow = (props) => {

  const renderCategory = () => {
    // wait for category to load before rendering title and color in case project loads before category in redux state
    if (!!props.category) {
      return(
        <div>
          <span className={`category-color-spot option-bg-${props.category.color}`}></span>
          <span>{props.category.title}</span>
        </div>
      )
    } else {
      return ""
    }
  }

  // uses inbuilt Date functions that return array indexes to display day of week and month as pretty format in table row
  const dateStringPrettyFormat = (dateString) => {
    const date = new Date(dateString)
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const pretty = `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    return pretty
  }

  return(
    <div className="project-row-columns project-table-row">
      <div>
        { props.project.title }
      </div>
      <div>
        { dateStringPrettyFormat(props.project.date) }
      </div>
      <div>
        { renderCategory() }
      </div>
      <div>
      </div>
    </div>
  )
}

export default ProjectTableRow
