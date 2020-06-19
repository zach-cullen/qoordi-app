import React from 'react'
import ProjectBoardRow from './ProjectBoardRow'

const ProjectBoardRows = () => {

  const projects = [
    {
      id: 1,
      title: "First Project",
      date: "06/14/2020",
      category: "Corporate",
    },
    {
      id: 2,
      title: "Second Project",
      date: "07/28/2020",
      category: "Wedding",
    },
    {
      id: 3,
      title: "Another One",
      date: "08/05/2020",
      category: "Music Video",
    },
  ]

  const renderProjectRows = (projects) => {
    if (projects.length === 0) {
      return(
        <p>You don't have any projects yet.</p>
      )
    }

    return projects.map((project) => {
      return(
        <ProjectBoardRow key={project.id} project={project} />
      )
    })
  }

  return (
    <div id="project-board-rows">
      { renderProjectRows(projects) }
    </div>
  )
}

export default ProjectBoardRows