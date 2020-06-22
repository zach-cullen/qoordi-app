import './ProjectSearch.css'
import React from 'react'

const ProjectSearch = () => {

  return(
    <div id="project-search">
      <input id="project-datalist" type="text" list="project-titles" placeholder="Search projects"/>

      <datalist id="project-titles">
        <option value="First Project" />
        <option value="Second Project" />
        <option value="Another One" />
      </datalist>

    </div>
  )
}

export default ProjectSearch