import './ProjectTable.css'
import React from 'react'
import ProjectTableHeaders from './ProjectTableHeaders'
import ProjectTableRows from './ProjectTableRows'

const ProjectTable = (props) => {
  return (
    <div id="project-table">
      <ProjectTableHeaders />
      <ProjectTableRows projects={props.projects} categories={props.categories}/>
    </div>
  )
}

export default ProjectTable