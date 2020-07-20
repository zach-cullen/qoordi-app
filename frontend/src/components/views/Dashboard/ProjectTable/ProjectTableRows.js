import React from 'react'
import ProjectTableRow from './ProjectTableRow'
import { Link } from 'react-router-dom'

const ProjectTableRows = (props) => {
  // renders a project tableRow for each project loaded, or a message if no projects exist
  const renderProjectRows = (projects) => {
    if (projects.length === 0) {
      return(
        <p>You don't have any projects yet.</p>
      )
    }
    // map over projects array and render table row that links to project page, with project and its category as prop
    return projects.map((project) => {
      return(
        <Link key={project.id} to={`/projects/${project.id}`}>
          <ProjectTableRow 
            project={project} 
            category={props.categories.byId[project.category_id]} 
          />
        </Link>
      )
    })
  }

  return (
    <div id="project-table-rows">
      { renderProjectRows(props.projects) }
    </div>
  )
}

export default ProjectTableRows