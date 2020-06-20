import React from 'react'

const ProjectTableRow = ({ project }) => {
  return(
    <div className="project-row-columns project-table-row">
      <div>
        { project.title }
      </div>
      <div>
        { project.date }
      </div>
      <div>
        { project.category }
      </div>
      <div>
      </div>
    </div>
  )
}

export default ProjectTableRow
