import React from 'react'
import ProjectTableRow from './ProjectTableRow'

const ProjectTableRows = (props) => {

  const projects = props.projects


  // renders a project tableRow for each project loaded, or a message if no projects exist
  const renderProjectRows = (projects) => {
    console.log(projects)
    if (projects.length === 0) {
      return(
        <p>You don't have any projects yet.</p>
      )
    }

    return projects.map((project) => {
      return(
        <ProjectTableRow 
          key={project.id} 
          project={project} 
          // pass the category object referenced by category_id in project object
          category={props.categories.byId[project.category_id]} 
        />
      )
    })
  }

  return (
    <div id="project-table-rows">
      { renderProjectRows(projects) }
    </div>
  )
}

export default ProjectTableRows