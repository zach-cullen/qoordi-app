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

  return(
    <div className="project-row-columns project-table-row">
      <div>
        { props.project.title }
      </div>
      <div>
        { props.project.date }
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
