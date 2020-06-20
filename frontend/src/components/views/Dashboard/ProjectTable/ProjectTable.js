import './ProjectTable.css'
import React from 'react'
import ProjectTableHeaders from './ProjectTableHeaders'
import ProjectTableRows from './ProjectTableRows'

const ProjectTable = () => {
  return (
    <div id="project-table">
      <ProjectTableHeaders />
      <ProjectTableRows />
    </div>
  )
}

export default ProjectTable