import React from 'react'

const ProjectTableRow = (props) => {

  const categoryLoaded = !!props.category

  const renderCategory = (category) => {
    return(
      <div>
        <span className={`category-color-spot option-bg-${category.color}`}></span>
        <span>{category.title}</span>
      </div>
    )
  }

  const dateStringPrettyFormat = (dateString) => {
    const date = new Date(dateString)
    const days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"]
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
        { categoryLoaded ? renderCategory(props.category) : ""}
      </div>
      <div>
      </div>
    </div>
  )
}

export default ProjectTableRow
