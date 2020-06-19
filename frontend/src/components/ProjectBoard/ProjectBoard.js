import './ProjectBoard.css'
import React from 'react'
import ProjectBoardHeaders from './ProjectBoardHeaders'
import ProjectBoardRows from './ProjectBoardRows'

const ProjectBoard = () => {
  return (
    <div id="project-board">
      <ProjectBoardHeaders />
      <ProjectBoardRows />
    </div>
  )
}

export default ProjectBoard