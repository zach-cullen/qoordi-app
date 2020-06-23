import React from 'react'

const ProjectTableRow = (props) => {

  const categoryLoaded = !!props.category

  return(
    <div className="project-row-columns project-table-row">
      <div>
        { props.project.title }
      </div>
      <div>
        { props.project.date }
      </div>
      <div>
        { categoryLoaded ? props.category.title : ""}
      </div>
      <div>
      </div>
    </div>
  )
}

export default ProjectTableRow
