import React from 'react'

const ProjectBoardRow = ({ project }) => {
  return(
    <div class="project-row-columns project-board-row">
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

export default ProjectBoardRow
